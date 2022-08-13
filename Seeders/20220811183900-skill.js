"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "skills",
      [
        {
          name: "Book Designer",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Acrylic Painter",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Comic Artist",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Digital Design",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Proof Reading",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Data Entry",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Accounting",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Medical Scribe",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plumbing",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carpentry",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gutter Cleaning",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Painting",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pet Care",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Child Care",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Errands",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Grocceries",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSS Developer",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chrome Extension Developer",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "React Developer ",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UI Design",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cold Caller",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Event Planner",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Social Media Marketer",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Data Analytics",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("skills", null, {})
  },
}
