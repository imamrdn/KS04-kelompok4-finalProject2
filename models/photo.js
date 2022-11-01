"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.hasMany(models.Comment);
    }
  }
  Photo.init(
    {
      title: DataTypes.STRING,
      caption: DataTypes.STRING,
      poster_image_url: DataTypes.TEXT,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Photo",
    }
  );
  return Photo;
};
