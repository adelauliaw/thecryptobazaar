const {Category} = require('../models');
module.exports = class CategoryController{
  static async createCategory(req,res,next){
    try {
      const createCategory = await Category.create({
        name : req.body.name
      })
      res.status(201).json(`User with email ${createCategory.name} has been created`)
    } catch (error) {
      console.log(error)
    }
  }
}