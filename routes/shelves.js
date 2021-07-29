const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const e = require('express');

router.get(
	'/new',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const movies = await db.Movie.findAll();
		res.render('new-shelf', { csrfToken: req.csrfToken(), movies });
	})
);

router.post(
	'/',
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
			res.send('success');
		} catch (err) {
			throw new Error(err);
		}
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
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
	})
);

router.post(
	'/:shelf/:id/delete',
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
	asyncHandler(async (req, res) => {
		const { shelfId } = req.params;
		const shelf = await db.Shelf.findByPk(shelfId);

		await shelf.destroy();

		res.status(200).send('OK');
	})
);

module.exports = { router };
