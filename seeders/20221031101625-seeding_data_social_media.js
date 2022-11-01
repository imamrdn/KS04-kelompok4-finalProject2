"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("SocialMedia", [
      {
        name: "Alicia",
        UserId: "2",
        social_media_url: "http://mygram.com/Alicia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "OmegaSupreme",
        UserId: "3",
        social_media_url: "http://mygram.com/OmegaSupreme",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
