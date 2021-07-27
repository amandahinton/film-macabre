const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');


// router.get('/:id/reviews/new'. csrfProtection, (req,res) => {
//     const review = {} //db.Review.build();
//     res.render('review-form', {title: 'Review Form', review, csrfToken: req.csrfToken()})
// })










module.exports = {router};