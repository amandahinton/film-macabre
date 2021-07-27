'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie_shelf = sequelize.define(
		'Movie_shelf',
		{
			shelfId: DataTypes.INTEGER,
			movieId: DataTypes.INTEGER,
		},
		{}
	);
	Movie_shelf.associate = function (models) {
		// associations can be defined here
	};
	return Movie_shelf;
};
