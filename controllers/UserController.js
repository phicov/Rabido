const { User } = require('../models')
const middleware = require('../middleware')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  try {
    const { username, email, password, city, isHunter } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      username,
      email,
      passwordDigest,
      city,
      isHunter
    })
    res.send(user)
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

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  let userId = parseInt(req.params.user_id)
  await User.destroy({ where: { id: userId } })
  res.send({ message: `Deleted profile with an id of ${userId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUser,
  CreateUser,
  RegisterUser,
  UpdateUser,
  DeleteUser
}
