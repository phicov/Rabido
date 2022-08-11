const Router = require("express").Router()
const controller = require("../controllers/SkillController")

Router.get("/get-skills", controller.GetSkills)
module.exports = Router
