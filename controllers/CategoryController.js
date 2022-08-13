const { Category, Skill } = require("../models")

const GetCats = async (req, res) => {
  try {
    const cats = await Category.findAll()
    res.send(cats)
  } catch (error) {
    throw error
  }
}

const GetCatById = async (req, res) => {
  try {
    const cat = await Category.findByPk(req.params.category_id)
    res.send({ cat })
  } catch (error) {
    throw error
  }
}

const GetCatsAndSkills = async (req, res) => {
  try {
    const catAndSkills = await Category.findAll({
      include: [
        {
          model: Skill,
          attributes: ["name"],
        },
      ],
    })
    res.send(catAndSkills)
  } catch (error) {
    throw error
  }
}

const CreateCat = async (req, res) => {
  try {
    const newCat = await new Category(req.body)
    await newCat.save()
    res.send(newCat)
  } catch (error) {
    throw error
  }
}
const UpdateCat = async (req, res) => {
  try {
    let categoryId = parseInt(req.params.category_id)
    let updatedCat = await Category.update(req.body, {
      where: { id: categoryId },
      returning: true,
    })
    res.send(updatedCat)
  } catch (error) {
    throw error
  }
}

const DeleteCat = async (req, res) => {
  let categoryId = parseInt(req.params.category_id)
  await Category.destroy({ where: { id: categoryId } })
  res.send({ message: `Deleted profile with an id of ${categoryId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCats,
  GetCatById,
  GetCatsAndSkills,
  UpdateCat,
  CreateCat,
  DeleteCat,
}
