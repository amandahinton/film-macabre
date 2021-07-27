'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					username: 'demo',
					firstName: 'Demo',
					lastName: 'User',
					email: 'demo@demo.com',
					age: 25,
					password: 'Password1!',
					createdAt: new Date(),
					updatedAt: new Date(),
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
      */
		return queryInterface.bulkDelete('Users', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
