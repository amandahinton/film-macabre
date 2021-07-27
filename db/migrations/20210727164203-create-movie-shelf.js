'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Movie_shelves', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			shelfId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Shelves',
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
		return queryInterface.dropTable('Movie_shelves');
	},
};
