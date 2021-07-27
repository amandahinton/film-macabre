'use strict';
module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		'Review',
		{
			body: DataTypes.TEXT,
			rating: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			movieId: DataTypes.INTEGER,
		},
		{}
	);
	Review.associate = function (models) {
		// associations can be defined here
		Review.belongsTo(models.User, { foreignKey: 'userId' });
		Review.belongsTo(models.Movie, { foreignKey: 'movieId' });
	};
	return Review;
};
