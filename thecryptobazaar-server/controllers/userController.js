const { User } = require('../models');
module.exports = class UserController {
  static async createUser(req,res,next){
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        role: req.body.role
      })
      res.status(201).json(`User with email ${newUser.email} and id ${newUser.id} has been created`)
    } catch (error) {
      console.log(error)
    }
  }
}
