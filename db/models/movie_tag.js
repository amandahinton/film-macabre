'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie_tag = sequelize.define(
		'Movie_tag',
		{
			movieId: DataTypes.INTEGER,
			tagId: DataTypes.INTEGER,
		},
		{}
	);
	Movie_tag.associate = function (models) {
		// associations can be defined here
	};
	return Movie_tag;
};
