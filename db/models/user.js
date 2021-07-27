'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			username: DataTypes.STRING,
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			age: DataTypes.INTEGER,
			password: DataTypes.STRING,
		},
		{}
	);
	User.associate = function (models) {
		// associations can be defined here
		User.hasMany(models.Shelf, { foreignKey: 'userId' });
		User.hasMany(models.Review, { foreignKey: 'userId' });
	};
	return User;
};
