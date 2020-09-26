// Call Model
const { register, getEmail,updateVerify } = require('../../model/usersModel')
const bcrypt = require('bcrypt')
const nodeMailer = require('nodemailer')
const jwt = require('jsonwebtoken')
// Call Helper
const { success, failed } = require('../../helper/response')
// Call Helper
const { emailSend } = require('../../helper/sendEmail')
// Call Env
const { JWT_REGIS, JWT_PRIVATE, EMAIL, PASSWORD, JWT_REFRESH } = require('../../helper/env')
const usersController = {
  registerController: async (req, res) => {
    const body = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(body.password, salt)
    const data = {
      name: body.name,
      email: body.email,
      password: hashPassword,
      image: 'default.jpg'
    }
    // console.log(data);
    try {
      const email = await getEmail(data.email)
      if (email.length>0) {
        failed(res, [], 'Email already exist')
        }else{
          const result = await register(data)
          emailSend(data.email)
          success(res, result , 'Success Registration')
        }
      } catch (error) {
        failed(res, [], error.message)
    }
  },
  verify: (req,res) => {
    const token = req.params.token
    if (token) {
      jwt.verify(token,JWT_REGIS, async (err,decode) => {
      if (err) {
        failed(res, [], err.message)
      }else{
        try {
          const decodeEmail = decode.email
          const result = await updateVerify(decodeEmail)
          if (result) {
            success(res, result.email, 'Congratulations your email has been actived')
          }else{
            res.json({
              message: 'Error actived'
            })
          }
        } catch (error) {
          failed(res, [], err.message)
        }
      }
      })
    }
  },
  updateUsersController: (req, res) => {
    const body = req.body
   
  }
}

module.exports = usersController