"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Graphics & Design",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Administrative",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music & Audio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Video & Animation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Programming & Tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lifestyle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Writing & Translation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {})
  },
}
