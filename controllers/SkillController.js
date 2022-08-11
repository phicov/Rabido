const { Skill, Profile } = require("../models")

const GetSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll()
    res.send(skills)
  } catch (error) {
    throw error
  }
}

const GetProfileBySkill = async (req, res) => {
  try {
    const profileBySkill = await Skill.findAll({
      include: [{ model: Profile, as: "profiles" }],
    })
    res.send(profileBySkill)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSkills,
  GetProfileBySkill,
}
