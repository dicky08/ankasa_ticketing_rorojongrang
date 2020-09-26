const db = require('../config/database')

const usersModel = {
  register:(data) => {
    return new Promise((resolve,reject) => {
      db.query(`INSERT INTO users (name,email,password,level,status,image) 
      VALUES('${data.name}','${data.email}','${data.password}','0','0','${data.image}')`,
      (err,result) => {
        err ? reject(new Error(err)): resolve(result)
      })
    }) 
  },
  getEmail:(email) => {
   return new Promise((resolve,reject) => {
    db.query(`SELECT * FROM users WHERE email='${email}'`,
    (err, result) => {
      err?reject(new Error(err)): resolve(result)
    })
   })
  },
  updateUsers:(data, id) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE users SET 
      nama='${data.nama}',
      email='${data.email}',
      address='${data.password}',
      phone_number='${data.image}'
      WHERE id = '${id}'`,
      (err,result) => {
        if (err) {
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  updateVerify: (email) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE users SET status=1 WHERE email='${email}'`,
      (err,result) =>{
        err?reject(new Error(err)) : resolve(result)
      })
    })
  }
  }

module.exports = usersModel