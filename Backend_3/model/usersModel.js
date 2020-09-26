const db = require('../config/database')

const usersModel = {
  register:(data) => {
    return new Promise((resolve,reject) =>{
      db.query(`INSERT INTO users SET ?`, data,
      (err,result) => {
        err?reject(new Error(err)): resolve(result)
      })
    })
  }
}

module.exports = usersModel