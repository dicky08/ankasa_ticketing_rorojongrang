// Call Model
const { register, getEmail,updateVerify,updateUsers } = require('../../model/usersModel')
// Call Helper
const { success, failed,errorImage } = require('../../helper/response')
const { emailSend } = require('../../helper/sendEmail')
const uploads = require('../../helper/upload')
// Call Env
const { JWT_REGIS, JWT_PRIVATE, EMAIL, PASSWORD, JWT_REFRESH } = require('../../helper/env')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')


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
updateed:  (req,res) => {
  uploads.single('image') (req,res, async (err) => {
    if (err) {
      if (err.code=== 'LIMIT_FILE_SIZE') {
        errorImage(res, [], 'File too large')
      }else{
        errorImage(res, [], 'File must be jpg | jpeg or png ')
      }
    }else {
      const id        = req.params.id
      const body  = req.body
      body.image = !req.file?'':req.file.filename
      try {
        const dataUser = await getEmail(body.email)
        const newImage = body.image 
        if (newImage) {
          // With Image
        if (dataUser[0].image==='default.jpg') {
          // Change img Default
          const results = await updateUsers(body,id)
          success(res, results, 'Update without image success')
        }else{
          // Change img after change default
          const result = await updateUsers(body,id)
          let oldPath = path.join(__dirname + `/../../public/img/${dataUser[0].image}`);
          fs.unlink(oldPath, function (err) {
              if (err) throw err;
              console.log('Deleted');
          })
          success(res, result, 'Update image success')
        }
        }else{
          // Without Image
          body.image = dataUser[0].image
        }
      } catch (error) {
        failed(res, [], error.message)
      }
  }
})
  },
 
}

module.exports = usersController