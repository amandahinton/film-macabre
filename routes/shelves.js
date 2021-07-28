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

		const user = await db.User.findByPk(shelf.userId);
		const created = shelf.createdAt.toLocaleDateString();
		const updated = shelf.updatedAt.toLocaleDateString();
		res.render('shelf', {
			shelf,
			user,
			created,
			updated,
			curId: res.locals.user.id,
		});
	})
);

router.delete(
	'/:shelf/:id',
	asyncHandler(async (req, res) => {
		const { shelf: shelfId, id: userId } = req.params;
		// const { id: curId } = res.locals.user;
		// const targetShelf = await db.Shelf.findByPk(shelf);
		// console.log(targetShelf);
		// if (curId === targetShelf.userId) {
		// 	console.log('HAHAHAHA LETS GO');
		// }
	})
);

module.exports = { router };
