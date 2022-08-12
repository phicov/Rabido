const Router = require("express").Router()
const controller = require("../controllers/SkillController")

Router.get("/get-skills", controller.GetSkills)
Router.get("/get-profilebyskill", controller.GetProfileBySkill)
Router.post("/new-skill", controller.CreateSkill)

module.exports = Router
