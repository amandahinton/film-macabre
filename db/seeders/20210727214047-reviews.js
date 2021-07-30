'use strict';

let reviews = [];

const NUM_MOVIES = 110
const NUM_REVIEWS_PER_MOVIE = 5;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Reviews',
      reviews)
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Movies', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  }
};
