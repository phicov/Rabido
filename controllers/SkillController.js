const { Skill } = require("../models")

const GetSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll()
    res.send(skills)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSkills,
}
