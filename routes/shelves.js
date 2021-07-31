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
			res.redirect(`/shelves/${newShelve.id}`);
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
				include: {
					model: db.Movie,
					include: db.Review,
				},
			});
			const curId = res.locals.user ? res.locals.user.id : null;
			let defaultUserShelves = await db.Shelf.findAll({
				where: {
					userId: curId,
				},
				limit: 3,
				order: [['id', 'ASC']],
			});

			defaultUserShelves = defaultUserShelves.map((myShelf) => myShelf.id);

			let isDefault = defaultUserShelves.some((curShelf) => {
				return parseInt(curShelf, 10) == parseInt(id, 10);
			});

			const userObj = await db.User.findByPk(shelf.userId);
			const created = shelf.createdAt.toLocaleDateString();
			const updated = shelf.updatedAt.toLocaleDateString();
			res.render('shelf', {
				shelf,
				userObj,
				created,
				updated,
				curId,
				isDefault,
			});
		} catch (err) {
			res.render('title', {
				title: 'This shelf does not exist!',
			});
		}
	})
);

router.delete(
	'/:shelf/:id',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { shelf: shelfId, id: movieId } = req.params;
		const userId = (await db.Shelf.findByPk(shelfId)).userId;
		const entry = await db.Movie_shelf.findOne({
			where: {
				shelfId,
				movieId,
			},
		});

		if (res.locals.user && userId == res.locals.user.id) {
			await entry.destroy();
			res.status(200).send('OK');
		} else {
			res.status(401).send();
		}
	})
);

router.delete(
	'/:shelfId',
	requireAuth,
	asyncHandler(async (req, res) => {
		const { shelfId } = req.params;

		const shelf = await db.Shelf.findByPk(shelfId);

		let defaultUserShelves = await db.Shelf.findAll({
			where: {
				userId: shelf.userId,
			},
			limit: 3,
			order: [['id', 'ASC']],
		});

		let isDefault = defaultUserShelves.some((curShelf) => {
			return parseInt(curShelf.id, 10) == parseInt(shelf.id, 10);
		});

		if (!isDefault && res.locals.user && shelf.userId == res.locals.user.id) {
			const shelf_movies = await db.Movie_shelf.findAll({
				where: {
					shelfId,
				},
			});

			await shelf_movies.forEach(async (movie) => await movie.destroy());

			await shelf.destroy();

			res.status(200).send();
		} else {
			res.status(401).send();
		}
	})
);

router.post(
	'/edit',
	asyncHandler(async (req, res) => {
		const { shelfId, movieId } = req.body;
		const { id: userId } = res.locals.user ? res.locals.user : null;

		const shelf = await db.Shelf.findByPk(shelfId);
		if (shelf.userId == userId) {
			const newMovie_shelf = await db.Movie_shelf.build({
				shelfId,
				movieId,
			});
			await newMovie_shelf.save();
			res.redirect(`/shelves/${shelfId}`);
		} else {
			res.status(401).send();
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

		if (userId === shelf.userId) {
			shelf.name = name;
			await shelf.save();

			res.status(200).send('OK');
		} else {
			res.status(401).send();
		}
	})
);

module.exports = { router };
