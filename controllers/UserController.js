const { User } = require("../models")

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const newUser = await new User(req.body)
    await newUser.save()
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  CreateUser,
}
