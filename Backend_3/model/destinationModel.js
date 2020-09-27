const db = require('../config/database')

const destination = {
  getAllModel: ()=> {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM destinations
      INNER JOIN departure_city ON destinations.id_departure_city = departure_city.id_departure_city
      INNER JOIN destination_city ON destinations.id_destination_city = destination_city.id
      INNER JOIN airlines_class ON destinations.id_class_airlines = airlines_class.id_class
      INNER JOIN departure_time ON destinations.id_departure_time = departure_time.id_departure_time`, 
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

module.exports = destination