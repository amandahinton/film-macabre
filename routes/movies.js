const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const reviewValidators = [
	check('body')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a body for Review'),
	check('rating')
		.exists({ checkFalsy: true })
		.withMessage('Please provide a Rating')
		.isInt({ max: 5 })
		.withMessage('Please do not exceed a score of 5')
		.isInt({ min: 0 })
		.withMessage('Please do not provide a score less than 0'),
];

router.get(
	'/',
	asyncHandler(async (req, res) => {
		let movies = await db.Movie.findAll({ include: db.Review });
		res.render('movies-all', { title: 'Browse all movies', movies });
	})
);

router.get(
	'/new',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		res.render('suggestion', {
			title: 'Suggest a movie',
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	'/new',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		const { title, year, description, director, cover } = req.body;
		await db.Suggestion.create({ title, year, description, director, cover });
		res.redirect('/');
	})
);

router.get(
	'/:id(\\d+)',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		let id = parseInt(req.params.id, 10);
		const userId = res.locals.user ? res.locals.user.id : null;
		let myShelves = null;

		let movie = await db.Movie.findByPk(id, { include: db.Review });

		let reviews = await db.Review.findAll({
			where: {
				movieId: id,
			},
			include: db.User,
		});
		if (userId) {
			myShelves = await db.Shelf.findAll({
				where: {
					userId,
				},
			});
		}

		res.render('movie-detail', {
			title: 'Review Form',
			movie,
			reviews,
			csrfToken: req.csrfToken(),
			userId,
			myShelves,
		});
	})
);

router.get(
	'/:id(\\d+)/reviews/new',
	requireAuth,
	csrfProtection,
	asyncHandler(async (req, res) => {
		let id = parseInt(req.params.id, 10);
		const movie = await db.Movie.findByPk(id);
		let review = db.Review.build();
		res.render('review-form', {
			title: 'Review Form Submission',
			review,
			movie,
			id,
			csrfToken: req.csrfToken(),
		});
	})
);

router.post(
	'/:id(\\d+)/reviews/new',
	requireAuth,
	reviewValidators,
	csrfProtection,
	asyncHandler(async (req, res) => {
		let movieId = parseInt(req.params.id, 10);
		const { rating, body } = req.body;

		const review = db.Review.build({
			userId: res.locals.user.id,
			rating,
			body,
			movieId,
		});
		const movie = await db.Movie.findByPk(movieId, {
			include: db.Review
		});
		let canReview = true
		let previousReviews = movie.Reviews
		const validatorErrors = validationResult(req);
		for(let i=0; i < previousReviews.length; i++) {
			let current = previousReviews[i]
			if (current.userId == review.userId) {
				canReview = false
			}
		}
		if (validatorErrors.isEmpty() && canReview) {
			await review.save();
			res.redirect(`/movies/${movieId}`);
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			console.log(canReview)
			res.render('review-form', {
				title: 'Add Review',
				review,
				movie,
				errors,
				canReview: false,
				csrfToken: req.csrfToken(),
			});
		}
	})
);

module.exports = { router };
