'use strict';

const FEATURED_ID = 6;
const USER_ID = 1;

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkInsert(
			'Shelves',
			[
				{
					userId: USER_ID,
					name: 'My Top 10',
				},
				{
					userId: USER_ID,
					name: 'Want to Watch',
				},
				{
					userId: USER_ID,
					name: 'Watched',
				},
				{
					userId: FEATURED_ID,
					name: 'Our picks for your next movie night',
				},
				{
					userId: FEATURED_ID,
					name: 'More gore por favor',
				},
				{
					userId: FEATURED_ID,
					name: 'A little scary but a lot hilarious',
				},
				{
					userId: FEATURED_ID,
					name: "You'll be sleeping with the lights on after this",
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
		return queryInterface.bulkDelete('Shelves', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
