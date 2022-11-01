"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Photo);
      this.hasMany(models.Comment);
      this.hasOne(models.SocialMedia);
    }
  }
  User.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      profile_image_url: DataTypes.TEXT,
      age: DataTypes.INTEGER,
      phone_number: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
