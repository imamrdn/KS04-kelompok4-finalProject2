"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
      },
      PhotoId: {
        type: Sequelize.INTEGER,
      },
      comment: {
        type: Sequelize.STRING,
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

    await queryInterface.addConstraint("Comments", {
      fields: ["UserId"],
      type: "foreign key",
      name: "comments-users_fk",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("Comments", {
      fields: ["PhotoId"],
      type: "foreign key",
      name: "comments-photos_fk",
      references: {
        table: "Photos",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Comments");
    await queryInterface.removeColumn("Comments", "UserId");
    await queryInterface.removeColumn("Comments", "PhotoId");
    await queryInterface.removeConstraint("Comments", "comments-users_fk");
    await queryInterface.removeConstraint("Comments", "comments-photos_fk");
  },
};
