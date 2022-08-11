const Router = require("express").Router()
const UserRouter = require("./UserRouter")
const ProfileRouter = require("./ProfileRouter")
const SkillRouter = require("./SkillRouter")
Router.use("/users", UserRouter)
Router.use("/profiles", ProfileRouter)
Router.use("/skills", SkillRouter)
module.exports = Router
