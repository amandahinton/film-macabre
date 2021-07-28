'use strict';

const NUM_SHELVES = 3;
const MOVIES_PER_SHELVE = 6;
let data = [];

for (let i = 0; i < NUM_SHELVES; i++) {
	for (let j = 0; j < MOVIES_PER_SHELVE; j++) {
		data.push({
			shelfId: i + 1,
			movieId: Math.floor(Math.random() * 100),
		});
	}
}

// Featured Lists Creation
const ourPicks = [
	{
		shelfId: 4,
		movieId: 91,
	},
	{
		shelfId: 4,
		movieId: 4,
	},
	{
		shelfId: 4,
		movieId: 1,
	},
	{
		shelfId: 4,
		movieId: 3,
	},
	{
		shelfId: 4,
		movieId: 11,
	},
	{
		shelfId: 4,
		movieId: 2,
	},
];

const gore = [
	{
		shelfId: 5,
		movieId: 98,
	},
	{
		shelfId: 5,
		movieId: 18,
	},
	{
		shelfId: 5,
		movieId: 24,
	},
	{
		shelfId: 5,
		movieId: 28,
	},
	{
		shelfId: 5,
		movieId: 29,
	},
	{
		shelfId: 5,
		movieId: 32,
	},
];

const moreComedy = [
	{
		shelfId: 6,
		movieId: 53,
	},
	{
		shelfId: 6,
		movieId: 101,
	},
	{
		shelfId: 6,
		movieId: 102,
	},
	{
		shelfId: 6,
		movieId: 85,
	},
	{
		shelfId: 6,
		movieId: 11,
	},
	{
		shelfId: 6,
		movieId: 110,
	},
];

const superSpooky = [
	{
		shelfId: 7,
		movieId: 93,
	},
	{
		shelfId: 7,
		movieId: 105,
	},
	{
		shelfId: 7,
		movieId: 108,
	},
	{
		shelfId: 7,
		movieId: 60,
	},
	{
		shelfId: 7,
		movieId: 97,
	},
	{
		shelfId: 7,
		movieId: 109,
	},
];

data = [...data, ...ourPicks, ...gore, ...moreComedy, ...superSpooky];
module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkInsert('Movie_shelves', data, {});
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete('Movie_shelves', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
