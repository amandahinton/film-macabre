'use strict';
module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define(
		'Tag',
		{
			name: DataTypes.STRING,
		},
		{}
	);
	Tag.associate = function (models) {
		// associations can be defined here
		const maps = {
			through: 'Movie_tag',
			otherKey: 'tagId',
			foreignKey: 'id',
		};

		Tag.belongsToMany(models.Movie_tag, maps);
	};
	return Tag;
};
