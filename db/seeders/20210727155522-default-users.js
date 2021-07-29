'use strict';
const bcrypt = require('bcryptjs');
const demoPassword = bcrypt.hashSync('Password1!', 12);
const adminPassword = bcrypt.hashSync('9#&ig67t2Y$8T@izT8w', 12);

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
				},
				{
					username: 'admin',
					firstName: 'Admin',
					lastName: 'Admin',
					email: 'admin@demo.com',
					age: 25,
					password: adminPassword,
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
