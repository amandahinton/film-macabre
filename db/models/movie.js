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
		Movie.hasMany(models.Review, { foreignKey: 'movieId' });

		const maps = {
			through: 'Movie_tag',
			otherKey: 'tagId',
			foreignKey: 'movieId',
		};

		Movie.belongsToMany(models.Tag, maps);

		const shelfMaps = {
			through: 'Movie_shelf',
			otherKey: 'shelfId',
			foreignKey: 'movieId',
		};

		Movie.belongsToMany(models.Shelf, shelfMaps);
	};
	return Movie;
};
