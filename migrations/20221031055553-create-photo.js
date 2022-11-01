"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Photos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      caption: {
        type: Sequelize.STRING,
      },
      poster_image_url: {
        type: Sequelize.TEXT,
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("Photos", {
      fields: ["UserId"],
      type: "foreign key",
      name: "photos-users_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Photos");
    await queryInterface.removeColumn("Photos", "UserId");
    await queryInterface.removeConstraint("Photos", "photos-users_fk");
  },
};
