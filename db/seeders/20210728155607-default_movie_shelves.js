'use strict';

const NUM_SHELVES = 3;
const MOVIES_PER_SHELVE = 6;
const data = [];

for (let i = 0; i < NUM_SHELVES; i++) {
	for (let j = 0; j < MOVIES_PER_SHELVE; j++) {
		data.push({
			shelfId: i + 1,
			movieId: Math.random() * 100,
		});
	}
}

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
