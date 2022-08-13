const { Skill, Profile } = require("../models")

const GetSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll()
    res.send(skills)
  } catch (error) {
    throw error
  }
}

const GetSkillById = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.skill_id)
    res.send({ skill })
  } catch (error) {
    throw error
  }
}

const GetProfileBySkill = async (req, res) => {
  try {
    const profileBySkill = await Skill.findAll({
      include: [
        {
          model: Profile,
          attributes: ["name", "image", "city", "rate", "projects"],
        },
      ],
    })
    res.send(profileBySkill)
  } catch (error) {
    throw error
  }
}

const CreateSkill = async (req, res) => {
  try {
    const newSkill = await new Skill(req.body)
    await newSkill.save()
    res.send(newSkill)
  } catch (error) {
    throw error
  }
}

const DeleteSkill = async (req, res) => {
  let skillId = parseInt(req.params.skill_id)
  await Skill.destroy({ where: { id: skillId } })
  res.send({ message: `Deleted profile with an id of ${skillId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSkills,
  GetSkillById,
  GetProfileBySkill,
  CreateSkill,
  DeleteSkill,
}
