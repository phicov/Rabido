const Router = require('express').Router()
const controller = require('../controllers/SkillController')

Router.get('/get-skills', controller.GetSkills)
Router.get('/skillsList', controller.GetSkillNames)
Router.get('/get-skill/:skill_id', controller.GetSkillById)
Router.get('/get-skills/:category_id', controller.GetSKillsByCat)
Router.get('/get-profilebyskill', controller.GetProfileBySkill)
Router.post('/new-skill', controller.CreateSkill)
Router.delete('/:skill_id', controller.DeleteSkill)

module.exports = Router
