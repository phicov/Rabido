const { User, Profile } = require("../models")
const middleware = require("../middleware")
const { Op } = require("sequelize")
const jwt = require("jsonwebtoken")

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
      isHunter,
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const LoginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
      raw: true,
    })

    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        city: user.city,
        isHunter: user.isHunter,
        profileId: user.profileId,
      }

      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized - Login Issue" })
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
      returning: true,
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

const CheckSession = async (req, res) => {
  const userData = jwt.verify(res.locals.token, process.env.APP_SECRET)
  const user = await User.findByPk(userData.id)
  let payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    city: user.city,
    isHunter: user.isHunter,
    profileId: user.profileId,
  }
  let token = middleware.createToken(payload)
  res.send({ user: payload, token })
}

module.exports = {
  GetUsers,
  GetUser,
  CreateUser,
  RegisterUser,
  LoginUser,
  UpdateUser,
  DeleteUser,
  CheckSession,
}
