'use strict';
module.exports = (sequelize, DataTypes) => {
  const Suggestion = sequelize.define('Suggestion', {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    director: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {});
  Suggestion.associate = function(models) {
    // associations can be defined here
  };
  return Suggestion;
};