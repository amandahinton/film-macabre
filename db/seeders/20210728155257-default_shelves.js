'use strict';

const userId = 1;

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
					userId,
					name: 'My Top 10',
				},
				{
					userId,
					name: 'Want to Watch',
				},
				{
					userId,
					name: 'Watched',
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
