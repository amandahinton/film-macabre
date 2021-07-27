'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Movie_tags', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
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
			tagId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Tags',
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
		return queryInterface.dropTable('Movie_tags');
	},
};
