const db = require('../config/database')

const destinationCity = {
  getAllModel: ()=> {
    return new Promise((resolve, reject) => {
      db.query(`SELECT destination_city.id,destination_city.code_arrived,destination_city.city_arrived,country.code_country,country.name_country FROM destination_city  JOIN country USING(id_country)`, 
      (err,result) => {
        if (err) {
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  getDetailModel: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT * FROM destination_city WHERE id= ${id}`,
      (err,result) => {
        if (err) {
          reject( new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  InsertModel: (data) => {
    return new Promise((resolve,reject) => {
      db.query(`INSERT INTO destination_city (code_arrived,city_arrived,id_country) VALUES('${data.code_arrived}','${data.city_arrived}','${data.id_country}') `,
      (err,result) => {
        if (err) {
          reject( new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  updateModel:(data, id) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE destination_city SET 
      code_arrived = '${data.code_arrived}',
      city_arrived = '${data.city_arrived}',
      id_country = '${data.id_country}'
       WHERE id = ${id} `,
      (err,result) => {
        if (err) {
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  deleteModel: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`DELETE FROM destination_city WHERE id=${id}`,
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