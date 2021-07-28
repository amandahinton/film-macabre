'use strict';
module.exports = (sequelize, DataTypes) => {
	const Shelf = sequelize.define(
		'Shelf',
		{
			name: DataTypes.STRING,
			userId: DataTypes.INTEGER,
		},
		{}
	);
	Shelf.associate = function (models) {
		// associations can be defined here
		Shelf.belongsTo(models.User, { foreignKey: 'userId' });

		const maps = {
			through: 'Movie_shelf',
			otherKey: 'movieId',
			foreignKey: 'shelfId',
		};

		Shelf.belongsToMany(models.Movie, maps);
	};
	return Shelf;
};
