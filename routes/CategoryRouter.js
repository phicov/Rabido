const Router = require("express").Router()
const controller = require("../controllers/CategoryController")

Router.get("/get-cats", controller.GetCats)
Router.get("/get-cat/:cat_id", controller.GetCatById)
Router.get("/get-cats", controller.GetCatsAndSkills)
Router.post("/new-cat", controller.CreateCat)
Router.put("/:cat_id", controller.UpdateCat)
Router.delete("/:cat_id", controller.DeleteCat)

module.exports = Router
