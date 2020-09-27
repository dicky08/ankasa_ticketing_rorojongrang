// Call Model
const {register,getAll} = require('../../model/usersModel')
const bcrypt = require('bcrypt')
// Call Helper
const {success,failed} = require('../../helper/response')
const usersController = {
  registerController: async (req,res) => {
    const body = req.body
    const salt  = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(body.password, salt)
    const data = {
      name: body.name,
      email: body.email,
      password: hashPassword,
      image:'default.jpg'
    }
  register(data)
  .then((result) => {
    success(res, result, 'Register Success')
    if (err.message=='null') {
      failed(res, [], 'Email has ben registered')
    }
  }).catch((err) => {
    if (err.message=='null') {
      failed(res, [], 'Email has ben registered')
    }
  });
  }
}

module.exports = usersController