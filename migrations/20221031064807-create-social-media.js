"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SocialMedia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      social_media_url: {
        type: Sequelize.STRING,
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
    await queryInterface.addConstraint("SocialMedia", {
      fields: ["UserId"],
      type: "foreign key",
      name: "socialmedia-users_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SocialMedia");
    await queryInterface.removeConstraint(
      "SocialMedia",
      "socialmedia-users_fk"
    );
    await queryInterface.removeColumn("SocialMedia", "UserId");
  },
};
