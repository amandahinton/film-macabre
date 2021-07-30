var express = require('express');
var router = express.Router();
const db = require('../db/models');

/* GET home page. */
router.get('/', async function (req, res, next) {
	try {
		const featuredShelves = await db.Shelf.findAll({
			where: {
				userId: 6,
			},
			include: { 
				model: db.Movie,
				include: db.Review
			}
		});
		console.log(res.locals.authenticated);
		let randomNumber = Math.floor(Math.random() * 110) + 1;
		let randomMovie = await db.Movie.findByPk(randomNumber);

		res.render('index', {
			title: 'HorrorHost',
			login: res.locals.authenticated,
			shelves: featuredShelves,
			content_container: "scream",
			randomMovie,
		});
		// res.json({featuredShelves})
	} catch (err) {
		throw new Error(err);
	}
});

module.exports = router;
