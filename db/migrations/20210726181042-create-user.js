'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING(50),
			},
			firstName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			lastName: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			email: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING(100),
			},
			age: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING.BINARY,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	},
};
