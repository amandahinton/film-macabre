const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const e = require('express');
const { loginUser, logoutUser, restoreUser } = require('../auth');

async function generateShelf(name, userId) {
	try {
		const newShelf = await db.Shelf.build({
			name,
			userId,
		});
		await newShelf.save();
		return newShelf;
	} catch (err) {
		throw new Error(err);
	}
}

const userValidators = [
	check('firstName')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your first name.')
		.isLength({ max: 50 })
		.withMessage('First name must not exceed 50 characters.'),
	check('lastName')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your last name.')
		.isLength({ max: 50 })
		.withMessage('Last name must not exceed 50 characters.'),
	check('email')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your email.')
		.isLength({ max: 100 })
		.withMessage('Email must not exceed 100 characters... or else.')
		.isEmail()
		.withMessage('Email Address is not a valid email')
		.custom((value) => {
			return db.User.findOne({ where: { email: value } }).then((user) => {
				if (user) {
					return Promise.reject('That email is already taken.');
				}
			});
		}),
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please enter a username.')
		.isLength({ max: 50 })
		.withMessage('Username must not exceed 50 characters.')
		.custom((value) => {
			return db.User.findOne({ where: { username: value } }).then((user) => {
				if (user) {
					return Promise.reject('That username is already taken.');
				}
			});
		}),
	check('age')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your age.'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please enter a password.')
		.isLength({ max: 50 })
		.withMessage('Password must not exceed 50 characters.')
		.isStrongPassword()
		.withMessage(
			'Password must contain at least one lowercase letter, one uppercase letter, one number, one symbol, and be at least 8 characters'
		),
	check('confirmPassword')
		.exists({ checkFalsy: true })
		.withMessage('Please enter a password.')
		.isLength({ max: 50 })
		.withMessage('Password must not exceed 50 characters.')
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error('Confirm Password does not match Password');
			}
			return true;
		}),
];

const loginValidators = [
	check('username')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your username.'),
	check('password')
		.exists({ checkFalsy: true })
		.withMessage('Please enter your password.'),
];

/* GET users listing. */
router.get('/', function (req, res, next) {
	// console.log(res.locals.user.id);
	res.send('respond with a resource');
});

router.get(
	'/register',
	csrfProtection,
	asyncHandler(async (req, res) => {
		const user = await db.User.build();
		res.render('register', {
			csrfToken: req.csrfToken(),
			title: 'Register',
			user,
		});
	})
);

router.post(
	'/register',
	csrfProtection,
	userValidators,
	asyncHandler(async (req, res) => {
		const { username, firstName, lastName, email, age, password, bio } =
			req.body;
		let user;
		if (bio) {
			user = await db.User.build({
				username,
				firstName,
				lastName,
				email,
				age,
				password,
				bio,
			});
		} else {
			user = await db.User.build({
				username,
				firstName,
				lastName,
				email,
				age,
				password,
			});
		}
		const validatorErrors = validationResult(req);

		if (!validatorErrors.isEmpty()) {
			const errors = validatorErrors.array().map((obj) => obj.msg);
			res.render('register', {
				title: 'Register',
				csrfToken: req.csrfToken(),
				user,
				errors,
			});
		} else {
			const hashedPassword = await bcrypt.hash(password, 12);
			user.password = hashedPassword;
			await user.save();

			// Generates the three default user shelves on registration.
			generateShelf('My Top 10', user.id);
			generateShelf('Watched', user.id);
			generateShelf('Want to Watch', user.id);

			loginUser(req, res, user);
			res.redirect('/');
		}
	})
);

router.get('/login', csrfProtection, (req, res) => {
	res.render('login', { title: 'Login', csrfToken: req.csrfToken() });
});

router.post('/logout', (req, res) => {
	logoutUser(req, res);
	req.session.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});

router.post(
	'/login',
	csrfProtection,
	loginValidators,
	asyncHandler(async (req, res) => {
		const { username, password } = req.body;
		const validatorErrors = validationResult(req);
		let errors = [];

		if (!validatorErrors.isEmpty()) {
			errors = validatorErrors.array().map((obj) => obj.msg);
		} else {
			const user = await db.User.findOne({
				where: {
					username,
				},
			});

			if (user) {
				const isPassword = await bcrypt.compare(
					password,
					user.password.toString()
				);
				if (isPassword) {
					loginUser(req, res, user);
					return res.redirect('/');
				}
			}
			errors.push('Login failed.');
		}
		res.render('login', { title: 'Login', csrfToken: req.csrfToken(), errors });
	})
);

router.post(
	'/login/demo',
	asyncHandler(async (req, res, next) => {
		const { username } = req.body;
		const demoUser = await db.User.findOne({
			where: { username },
		});
		if (username === 'demo') {
			loginUser(req, res, demoUser);
			return req.session.save((error) => {
				if (error) {
					next(error);
				} else {
					return res.redirect('/');
				}
			});
		}
		return res.redirect('/');
	})
);

router.get(
	'/my-profile',
	asyncHandler(async (req, res) => {
		const user = res.locals.user;
		if (user) {
			const userShelves = await db.Shelf.findAll({
				where: {
					userId: user.id,
				},
			});

			res.render('my-profile', { user, userShelves });
		} else {
			res.redirect('/users/login');
		}
	})
);

router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const { id } = req.params;
		const userObj = await db.User.findByPk(id);
		const shelves = await db.Shelf.findAll({
			where: {
				userId: id,
			},
			include: {
				model: db.Movie,
				include: db.Review,
			},
		});
		const reviews = await db.Review.findAll({
			where: {
				userId: id,
			},
			include: db.Movie,
		});
		console.log(reviews);
		console.log(shelves);
		res.render('user-profile', { userObj, shelves, reviews });
	})
);

module.exports = { router, restoreUser };
