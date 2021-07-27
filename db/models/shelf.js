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
			otherKey: 'shelfId',
			foreignKey: 'id',
		};

		Shelf.belongsToMany(models.Movie_shelf, maps);
	};
	return Shelf;
};
