// Impor Database
const db = require('../config/database')
// Defiisikan
const departure_city  = {
      getAllModel: () => {
        return new Promise((resolve,reject) => {
          db.query(`SELECT * FROM departure_city`,
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

module.exports = destination_city