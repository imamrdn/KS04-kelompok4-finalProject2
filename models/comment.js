"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Photo);
    }
  }
  Comment.init(
    {
      UserId: DataTypes.INTEGER,
      PhotoId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
