const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/get-users', controller.GetUsers)
Router.post('/new-user', controller.CreateUser)

// Router.post('/register',
// contr.Register)


module.exports = Router
