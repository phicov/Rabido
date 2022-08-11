const Router = require("express").Router()
const controller = require("../controllers/ProfileController")

Router.get("/", controller.GetProfiles)
Router.get("/:profile_id", controller.GetProfile)
Router.post("/new-profile", controller.CreateProfile)
Router.put("/:profile_id", controller.UpdateProfile)
Router.delete("/:profile_id", controller.DeleteProfile)
module.exports = Router
