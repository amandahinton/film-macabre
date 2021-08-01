'use strict';

const bcrypt = require('bcryptjs');
const demoPassword = bcrypt.hashSync(process.env.DEMO_PASSWORD, 12);
const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);

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
					bio: '',
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
					bio: '#1 Horror Fan',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'frankenstein',
					firstName: 'Moncef',
					lastName: 'Sebata',
					email: 'moncef@demo.com',
					age: 25,
					password: demoPassword,
					bio: 'Victor, the (not mad) scientist. Not that other guy.',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'elvira',
					firstName: 'Amanda',
					lastName: 'Hinton',
					email: 'amanda@demo.com',
					age: 25,
					password: demoPassword,
					bio: 'Mistress of the Dark (TM), Horror Hostess, Horror Hotness',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					username: 'boo',
					firstName: 'Walker',
					lastName: 'Williams',
					email: 'walker@demo.com',
					age: 25,
					password: demoPassword,
					bio: 'I am the thing that goes bump in the night',
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
					bio: '👻🧛‍♂️💀🐺 Welcome to HorrorHost! 🧟‍♂️🤡🔪😈',
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
