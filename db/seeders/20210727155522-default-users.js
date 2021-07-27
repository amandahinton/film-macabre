'use strict';
const bcrypt = require('bcryptjs');
const demoPassword = bcrypt.hashSync('Password1!', 12);

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
					password: demoPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'voodoojellyfish',
					firstName: 'Tanner',
					lastName: 'Pedretti',
					email: 'tanner@demo.com',
					age: 25,
					password: demoPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'Moncef',
					firstName: 'Moncef',
					lastName: 'Sebata',
					email: 'moncef@demo.com',
					age: 25,
					password: demoPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'Amanda',
					firstName: 'Amanda',
					lastName: 'Hinton',
					email: 'amanda@demo.com',
					age: 25,
					password: demoPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'Walker',
					firstName: 'Walker',
					lastName: 'Williams',
					email: 'walker@demo.com',
					age: 25,
					password: demoPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				}
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
