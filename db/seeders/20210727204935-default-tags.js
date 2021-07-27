'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Tags',
      [
        { name: 'supernatural' },
        { name: 'monster' },
        { name: 'slasher' },
        { name: 'splatter' },
        { name: 'psychological' },
        { name: 'comedy' },
        { name: 'classic' },
      ]
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
