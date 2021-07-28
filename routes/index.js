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
			include: db.Movie,
		});
		console.log(featuredShelves);
		res.render('index', {
			title: 'Horror Host',
			shelves: featuredShelves,
		});
	} catch (err) {
		throw new Error(err);
	}
});

module.exports = router;
