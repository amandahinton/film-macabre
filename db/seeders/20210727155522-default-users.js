'use strict';
const bcrypt = require('bcryptjs');
const demoPassword = bcrypt.hashSync('Password1!', 12);

module.exports = {
	up: (queryInterface, Sequelize) => {
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
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
