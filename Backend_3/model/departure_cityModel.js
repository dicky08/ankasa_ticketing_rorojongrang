const { resolve } = require('path')
// Impor Database
const db = require('../config/database')
// Defiisikan
const departure_cityModel  = {
      getAllModel: () => {
        return new Promise((resolve,reject) => {
          db.query(`SELECT departure_city.id_departure_city,departure_city.code_departure_city,departure_city.name_departure_city,country.code_country,country.name_country FROM departure_city  JOIN country USING(id_country)`,
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
          db.query(`SELECT * FROM departure_city WHERE id_departure_city= ${id}`,
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
          db.query(`INSERT INTO departure_city (code_departure_city,name_departure_city,id_country) VALUES('${data.code_departure_city}','${data.name_departure_city}','${data.id_country}') `,
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
          db.query(`UPDATE departure_city SET 
          code_departure_city = '${data.code_departure_city}',
          name_departure_city = '${data.name_departure_city}',
          id_country = '${data.id_country}'
           WHERE id_departure_city = ${id} `,
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
          db.query(`DELETE FROM departure_city WHERE id_departure_city=${id}`,
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

module.exports = departure_cityModel