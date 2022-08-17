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
          name: "Logo & Brand Identity",
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
          name: "Web & App Design",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Art & Illustration",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Print Design",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Packaging & Cover",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Architecture & Building Design",
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
          name: "Virtual Assistant",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music Production & Writing",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Audio Engineering & Post Production",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Voice Over & Streaming",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lessons & Transcription",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "DJing",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sound Design",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Social & Marketing Videos",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Video Editing & Post-Production",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Product & Explainer Videos",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tutorials & Education",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Photography",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Animation",
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Website Development",
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
          name: "Application Development",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Support & Cybersecurity",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User Testing",
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Astrology & Psychics",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Life Coaching",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Personal Stylists",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fitness",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cooking Lessons",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dance Lessons",
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghostwriting",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Proofreading & Editing",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Resume Writing",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Scriptwriting",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business Names & Slogans",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UX Writing",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Translation & Transcription",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Job Descriptions",
          categoryId: 7,
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
