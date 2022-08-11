const Router = require("express").Router()
const controller = require("../controllers/UserController")

Router.get("/get-users", controller.GetUsers)
Router.post("/new-user", controller.CreateUser)
module.exports = Router
