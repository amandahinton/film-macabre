'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie = sequelize.define(
		'Movie',
		{
			title: DataTypes.STRING,
			year: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			director: DataTypes.STRING,
			cover: DataTypes.STRING,
		},
		{}
	);
	Movie.associate = function (models) {
		// associations can be defined here
		Movie.hasMany(models.Review, { foreignKey: 'movieId ' });

		const maps = {
			through: 'Movie_tag',
			otherKey: 'movieId',
			foreignKey: 'id',
		};

		Movie.belongsToMany(models.Movie_tag, maps);

		const shelfMaps = {
			through: 'Movie_shelf',
			otherKey: 'moveId',
			foreignKey: 'id',
		};

		Movie.belongsToMany(models.Movie_shelf, shelfMaps);
	};
	return Movie;
};
