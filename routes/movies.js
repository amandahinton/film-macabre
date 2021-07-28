const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');



const reviewValidators = [
    check('body')
        .exists({checkFalsy: true})
        .withMessage("Please provide a body for Review"),
    check('rating')
        .exists({checkFalsy: true})
        .withMessage("Please provide a Rating")
        .isInt({max:5})
        .withMessage("Please do not exceed a score of 5")
        .isInt({min:0})
        .withMessage("Please do not provide a score less than 0")
]

router.get('/', asyncHandler(async (req, res) => {
    let movies = await db.Movie.findAll();
    let reviews = await db.Review.findAll();
    res.render('movies-all', { title: 'Browse all movies', movies, reviews})
}));


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async(req,res) => {
    let id = parseInt(req.params.id, 10)
    let movie = await db.Movie.findByPk(id)
    res.render('movie-detail', {title: 'Review Form', movie, csrfToken: req.csrfToken()})
}));

router.get('/:id(\\d+)/reviews/new', csrfProtection, asyncHandler(async(req,res) => {
    let id = parseInt(req.params.id, 10)
    let review = {} //await db.Review.build();
    res.render('review-form', {
        title: "Review Form Submission",
        review,
        id,
        csrfToken: req.csrfToken()
    })
}));

router.post('/:id(\\d+)/reviews/new', reviewValidators, csrfProtection, asyncHandler(async (req, res) => {
    let movieId = parseInt(req.params.id, 10)
    const {
      rating,
      body
    } = req.body;

    const review = db.Review.build({
        userId: res.locals.user.id,
        rating,
        body,
        movieId
    })
    const validatorErrors = validationResult(req);
    // console.log("WEEEEEEE", validationErrors)
    if (validatorErrors.isEmpty()) {
        await review.save()
        res.redirect(`/movies/${movieId}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('review-form', {
        title: 'Add Review',
        review,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
}));










module.exports = {router};
