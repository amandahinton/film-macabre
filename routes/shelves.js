const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const e = require('express');
const { requireAuth } = require('../auth');

router.get(
	'/new',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();
		res.render('new-shelf', { csrfToken: req.csrfToken(), movies });
	})
);

router.post(
	'/',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		try {
			const { id: userId } = res.locals.user;
			const { shelfName: name } = req.body;
			const newShelve = await db.Shelf.build({
				userId,
				name,
			});
			await newShelve.save();
			res.redirect(`/users/${userId}`);
		} catch (err) {
			throw new Error(err);
		}
	})
);

router.get(
	'/:id',
	requireAuth,
	asyncHandler(async (req, res) => {
		try {
			const { id } = req.params;
			const shelf = await db.Shelf.findByPk(id, {
				include: db.Movie,
			});
			const curId = res.locals.user ? res.locals.user.id : null;

			const user = await db.User.findByPk(shelf.userId);
			const created = shelf.createdAt.toLocaleDateString();
			const updated = shelf.updatedAt.toLocaleDateString();
			res.render('shelf', {
				shelf,
				user,
				created,
				updated,
				curId,
			});
		} catch (err) {
			res.render('title', {
				title: 'This shelf does not exist!',
			});
		}
	})
);

router.post(
	'/:shelf/:id/delete',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { shelf: shelfId, id: movieId } = req.params;

		const entry = await db.Movie_shelf.findOne({
			where: {
				shelfId,
				movieId,
			},
		});

		await entry.destroy();
		res.status(200).send('OK');
	})
);

router.post(
	'/:shelfId/delete',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { shelfId } = req.params;
		const shelf = await db.Shelf.findByPk(shelfId);
		const shelf_movies = await db.Movie_shelf.findAll({
			where: {
				shelfId,
			},
		});

		await shelf_movies.forEach(async (movie) => await movie.destroy());

		await shelf.destroy();

		res.status(200).send('OK');
	})
);

router.post(
	'/edit',
	asyncHandler(async (req, res) => {
		const { shelfId, movieId } = req.body;
		const { id: userId } = res.locals.user ? res.locals.user : null;

		console.log(res.locals.user.id);

		const shelf = await db.Shelf.findByPk(shelfId);
		console.log(userId);
		if (shelf.userId == userId) {
			const newMovie_shelf = await db.Movie_shelf.build({
				shelfId,
				movieId,
			});
			await newMovie_shelf.save();
			res.redirect(`/shelves/${shelfId}`);
		} else {
			res.status(400).send('Denied');
		}
	})
);

router.put(
	'/:id',
	asyncHandler(async (req, res) => {
		const { name } = req.body;
		const { id } = req.params;
		const { id: userId } = res.locals.user;

		const shelf = await db.Shelf.findByPk(id);

		// console.log(name, id, userId, shelf);

		if (userId === shelf.userId) {
			shelf.name = name;
			await shelf.save();

			res.status(200).send('OK');
		} else {
			res.status(400).send('DENIED');
		}
	})
);

module.exports = { router };
