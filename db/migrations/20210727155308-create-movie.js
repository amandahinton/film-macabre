'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Movies', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			year: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			description: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			director: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			cover: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Movies');
	},
};
