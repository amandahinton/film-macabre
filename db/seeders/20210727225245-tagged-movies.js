'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Movie_tags',
      [
        { movieId: 1, tagId: 1 },
        { movieId: 1, tagId: 7 },
        { movieId: 2, tagId: 4 },
        { movieId: 2, tagId: 1 },
        { movieId: 3, tagId: 1 },
        { movieId: 4, tagId: 1 },
        { movieId: 5, tagId: 4 },
        { movieId: 6, tagId: 5 },
        { movieId: 6, tagId: 7 },
        { movieId: 7, tagId: 4 },
        { movieId: 8, tagId: 2 },
        { movieId: 9, tagId: 4 },
        { movieId: 9, tagId: 5 },
        { movieId: 10, tagId: 2 },
        { movieId: 10, tagId: 7 },
        { movieId: 11, tagId: 6 },
        { movieId: 11, tagId: 4 },
        { movieId: 12, tagId: 2 },
        { movieId: 12, tagId: 7 },
        { movieId: 13, tagId: 2 },
        { movieId: 13, tagId: 7 },
        { movieId: 14, tagId: 1 },
        { movieId: 15, tagId: 4 },
        { movieId: 16, tagId: 1 },
        { movieId: 17, tagId: 5 },
        { movieId: 18, tagId: 3 },
        { movieId: 19, tagId: 5 },
        { movieId: 20, tagId: 2 },
        { movieId: 21, tagId: 2 },
        { movieId: 22, tagId: 1 },
        { movieId: 23, tagId: 1 },
        { movieId: 23, tagId: 7 },
        { movieId: 24, tagId: 3 },
        { movieId: 25, tagId: 2 },
        { movieId: 26, tagId: 2 },
        { movieId: 27, tagId: 2 },
        { movieId: 28, tagId: 3 },
        { movieId: 29, tagId: 3 },
        { movieId: 30, tagId: 2 },
        { movieId: 31, tagId: 2 },
        { movieId: 31, tagId: 7 },
        { movieId: 32, tagId: 3 },
        { movieId: 32, tagId: 7 },
        { movieId: 33, tagId: 5 },
        { movieId: 34, tagId: 1 },
        { movieId: 35, tagId: 1 },
        { movieId: 36, tagId: 2 },
        { movieId: 37, tagId: 2 },
        { movieId: 38, tagId: 3 },
        { movieId: 38, tagId: 6 },
        { movieId: 39, tagId: 3 },
        { movieId: 40, tagId: 2 },
        { movieId: 41, tagId: 3 },
        { movieId: 42, tagId: 1 },
        { movieId: 43, tagId: 2 },
        { movieId: 44, tagId: 4 },
        { movieId: 45, tagId: 2 },
        { movieId: 46, tagId: 1 },
        { movieId: 47, tagId: 2 },
        { movieId: 48, tagId: 5 },
        { movieId: 49, tagId: 1 },
        { movieId: 50, tagId: 1 },
        { movieId: 51, tagId: 1 },
        { movieId: 52, tagId: 2 },
        { movieId: 53, tagId: 6 },
        { movieId: 54, tagId: 2 },
        { movieId: 55, tagId: 2 },
        { movieId: 56, tagId: 2 },
        { movieId: 57, tagId: 1 },
        { movieId: 58, tagId: 2 },
        { movieId: 59, tagId: 2 },
        { movieId: 60, tagId: 5 },
        { movieId: 61, tagId: 4 },
        { movieId: 62, tagId: 2 },
        { movieId: 63, tagId: 2 },
        { movieId: 64, tagId: 2 },
        { movieId: 65, tagId: 6 },
        { movieId: 66, tagId: 5 },
        { movieId: 67, tagId: 1 },
        { movieId: 68, tagId: 1 },
        { movieId: 69, tagId: 4 },
        { movieId: 70, tagId: 2 },
        { movieId: 71, tagId: 5 },
        { movieId: 71, tagId: 7 },
        { movieId: 72, tagId: 5 },
        { movieId: 73, tagId: 6 },
        { movieId: 74, tagId: 6 },
        { movieId: 75, tagId: 5 },
        { movieId: 76, tagId: 2 },
        { movieId: 77, tagId: 2 },
        { movieId: 78, tagId: 2 },
        { movieId: 79, tagId: 6 },
        { movieId: 79, tagId: 2 },
        { movieId: 80, tagId: 2 },
        { movieId: 81, tagId: 5 },
        { movieId: 82, tagId: 4 },
        { movieId: 83, tagId: 2 },
        { movieId: 84, tagId: 1 },
        { movieId: 85, tagId: 4 },
        { movieId: 85, tagId: 6 },
        { movieId: 86, tagId: 1 },
        { movieId: 87, tagId: 1 },
        { movieId: 87, tagId: 7 },
        { movieId: 88, tagId: 2 },
        { movieId: 89, tagId: 4 },
        { movieId: 90, tagId: 5 },
        { movieId: 91, tagId: 1 },
        { movieId: 92, tagId: 2 },
        { movieId: 92, tagId: 7 },
        { movieId: 93, tagId: 5 },
        { movieId: 93, tagId: 4 },
        { movieId: 94, tagId: 4 },
        { movieId: 95, tagId: 2 },
        { movieId: 95, tagId: 7 },
        { movieId: 96, tagId: 3 },
        { movieId: 97, tagId: 5 },
        { movieId: 98, tagId: 3 },
        { movieId: 99, tagId: 4 },
        { movieId: 100, tagId: 4 },
        { movieId: 101, tagId: 6 },
        { movieId: 102, tagId: 6 },
        { movieId: 102, tagId: 2 },
        { movieId: 103, tagId: 2 },
        { movieId: 104, tagId: 2 },
        { movieId: 105, tagId: 5 },
        { movieId: 105, tagId: 1 },
        { movieId: 106, tagId: 4 },
        { movieId: 106, tagId: 6 },
        { movieId: 107, tagId: 1 },
        { movieId: 108, tagId: 3 },
        { movieId: 108, tagId: 5 },
        { movieId: 109, tagId: 5 },
        { movieId: 110, tagId: 6 }
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movie_tags', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
