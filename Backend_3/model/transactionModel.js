// Impor Database
const db = require('../config/database')
// Defiisikan
const transactionModel  = {
      getAllModel: () => {
        return new Promise((resolve,reject) => {
          db.query(`SELECT * FROM transaction`,
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
          db.query(`SELECT * FROM transaction WHERE id_transaction= ${id}`,
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
          db.query(`INSERT INTO transaction (id_user,id_airlines,proof_of_payment,status_payment) VALUES('${data.id_user}','${data.id_airlines}','payment.jpg','1') `,
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
          db.query(`UPDATE transaction SET 
          id_user = '${data.id_user}',
          id_airlines = '${data.id_airlines}',
          proof_of_payment = '${data.proof_of_payment}',
          status_payment = '${data.status_payment}'
           WHERE id_transaction = ${id} `,
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
          db.query(`DELETE FROM transaction WHERE id_transaction=${id}`,
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

module.exports = transactionModel