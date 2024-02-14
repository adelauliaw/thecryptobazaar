const express = require('express')
const CategoryController = require('../controllers/categoryController')
const categoryRouter = express.Router()

categoryRouter.post('/', CategoryController.createCategory)
module.exports = categoryRouter