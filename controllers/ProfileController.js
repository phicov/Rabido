const { Profile, Skill } = require('../models')

const GetProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [{ model: Skill, attributes: ['name'] }]
    })
    res.send(profiles)
  } catch (error) {
    throw error
  }
}

const GetProfileById = async (req, res) => {
  try {
    const profile = await Profile.findByPk(req.params.profile_id, {
      include: [{ model: Skill, attributes: ['name'] }]
    })
    res.send(profile)
  } catch (error) {
    throw error
  }
}

const GetProfilesBySkill = async (req, res) => {
  try {
    const profiles = await Skill.findByPk(req.params.skill_id, {
      include: [
        {
          model: Profile,
          attributes: [
            'id',
            'name',
            'image',
            'city',
            'about',
            'contact',
            'rate',
            'projects'
          ]
        }
      ]
    })
    res.send({ profiles })
  } catch (error) {
    throw error
  }
}

const CreateProfile = async (req, res) => {
  try {
    const newProfile = await new Profile(req.body)
    await newProfile.save()
    res.send(newProfile)
  } catch (error) {}
}

const UpdateProfile = async (req, res) => {
  try {
    let profileId = parseInt(req.params.profile_id)
    let updatedProfile = await Profile.update(req.body, {
      where: { id: profileId },
      returning: true
    })
    res.send(updatedProfile)
  } catch (error) {
    throw error
  }
}

const DeleteProfile = async (req, res) => {
  let profileId = parseInt(req.params.profile_id)
  await Profile.destroy({ where: { id: profileId } })
  res.send({ message: `Deleted profile with an id of ${profileId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetProfileById,
  GetProfilesBySkill,
  CreateProfile,
  UpdateProfile,
  DeleteProfile
}
