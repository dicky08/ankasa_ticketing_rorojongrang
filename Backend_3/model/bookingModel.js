const db = require('../config/database')
module.exports = {
  insertModel: (data) => {
    return new Promise((resolve,reject) => {
      db.query(`INSERT INTO booking (id_user,id_airlines,code_departure,code_destination,proof_of_payment,total_payment,status_payment) VALUES('${data.id_user}','${data.id_airlines}','${data.code_departure}','${data.code_destination}','payment.jpg','${data.total_payment}','1') `,
      (err,result) => {
        if (err) {
          reject( new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  getAllModel: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT booking.*,airliness.departure_day,airliness.code_airlines,airliness.name_airlines,users.name,users.address,users.cards,users.image FROM booking  
      INNER JOIN users ON booking.id_user = users.id
      INNER JOIN airliness ON booking.id_airlines = airliness.id_airlines
      WHERE id_user= ${id}`,
      (err,result) => {
        if (err) {
          reject( new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  getDetailModel: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`SELECT booking.*,airliness.code_airlines,airliness.departure_day,airlines_class.name_class,airliness.image_airlines
      FROM booking
      JOIN airliness ON booking.id_airlines = airliness.id_airlines
      JOIN airlines_class ON airliness.id_class = airlines_class.id_class
      WHERE id_booking= ${id}`,
      (err,result) => {
        if (err) {
          reject( new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  payment: (data,id) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE booking SET 
      proof_of_payment = '${data.proof_of_payment}', 
      status_payment = 2 
      WHERE id_booking = ${id}`, (err,result) => {
        err?reject(new Error(err.message)): resolve(result)
      })
    })
  }
}