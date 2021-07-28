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

//get a single review
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async(req,res) => {
    const id = parseInt(req.params.id, 10)
    const review = await db.Review.findByPk(id)
    res.render('review', {title: 'Review', review, csrfToken: req.csrfToken()})
}));


//edit review route
router.post('/:id(\\d+)', csrfProtection, reviewValidators,
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    
    const reviewToUpdate = await db.Review.findByPk(id);
    let movieId = reviewToUpdate.movieId
    const {
      body,
      rating,
    } = req.body;

    const review = {
      body,
      rating,
    };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await reviewToUpdate.update(review);
      res.redirect(`/movies/${reviewToUpdate.movieId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('review', {
        title: 'Edit Review',
        review: { ...review, id },
        movieId,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

    router.post('/:id(\\d+)/delete', csrfProtection, reviewValidators, asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const review = await db.Review.findByPk(id);
        const movieId = review.movieId
        if (review) {
            await review.destroy();
            res.redirect(`/movies/${movieId}`)
        // res.status(204).end()
        } else {
            res.send("review not found")
     }
}));


module.exports = {router};