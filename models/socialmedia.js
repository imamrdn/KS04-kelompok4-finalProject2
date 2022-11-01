"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
    }
  }
  SocialMedia.init(
    {
      name: DataTypes.STRING,
      sosial_media_url: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SocialMedia",
    }
  );
  return SocialMedia;
};
