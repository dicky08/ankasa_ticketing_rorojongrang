const db = require('../config/database')

const destinationCity = {
  getAllModel: ()=> {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM destination_city`, 
      (err,result) => {
        if (err) {
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  }
}

module.exports = destinationCity