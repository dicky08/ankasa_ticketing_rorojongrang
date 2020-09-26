// Call Model
const {register} = require('../../model/usersModel')

const usersController = {
  registerController: (req,res) => {
    const body = req.body
    console.log(body);
  }
}

module.exports = usersController