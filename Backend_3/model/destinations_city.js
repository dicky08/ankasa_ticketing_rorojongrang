// Impor Database
const db = require('../config/database')
const destinations_city  = {
      getAllModel: () => {
        return new Promise((resolve,reject) => {
          db.query(`SELECT * FROM destinations_city`,
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

module.exports = destinations_city