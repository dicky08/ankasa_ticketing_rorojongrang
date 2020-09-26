const db = require('../config/database')

const usersModel = {
  register:(data) => {
    return new Promise((resolve,reject) =>{
      db.query(`SELECT * FROM users WHERE email = '${data.email}'`,
      (err,result) => {
        if (err) {
          console.log(err);
        }else{
        if (result.length===0) {
          db.query(`INSERT INTO users SET ? `, data, 
          (error,respon) => {
            if (err) {
              console.log(error);
            }else{
              resolve(respon)
            }
          })
        }else{
          reject(new Error(err))
        }
        }
      })
    })
    }
      
  }

module.exports = usersModel