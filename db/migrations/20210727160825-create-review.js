'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Reviews', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			body: {
				type: Sequelize.TEXT,
			},
			rating: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Users',
					},
				},
			},
			movieId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Movies',
					},
				},
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
		return queryInterface.dropTable('Reviews');
	},
};
