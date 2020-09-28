const { resolve } = require('path')
const db = require('../config/database')

const usersModel = {
  getAll:() => {
    return new Promise((resolve,reject) => {
     db.query(`SELECT * FROM users`,
     (err, result) => {
       err?reject(new Error(err)): resolve(result)
     })
    })
   },
  register:(data) => {
    return new Promise((resolve,reject) => {
      db.query(`INSERT INTO users (name,email,password,level,status,image) 
      VALUES('${data.name}','${data.email}','${data.password}','0','0','${data.image}')`,
      (err,result) => {
        err ? reject(new Error(err)): resolve(result)
      })
    }) 
  },
  getEmail:(email) => {
   return new Promise((resolve,reject) => {
    db.query(`SELECT * FROM users WHERE email='${email}'`,
    (err, result) => {
      err?reject(new Error(err)): resolve(result)
    })
   })
  },
  getId:(id) => {
    return new Promise((resolve,reject) => {
     db.query(`SELECT * FROM users WHERE id='${id}'`,
     (err, result) => {
       err?reject(new Error(err)): resolve(result)
     })
    })
   },
  updateUsers:(data, id) => {
    console.log(data);
    return new Promise((resolve,reject) => {
      db.query(`UPDATE users SET 
      name='${data.name}',
      email='${data.email}',
      city='${data.city}',
      address='${data.address}',
      phone_number='${data.phone_number}',
      post_code='${data.post_code}',
      cards='${data.cards}',
      image='${data.image}'
      WHERE id = '${id}'`,
      (err,result) => {
        if (err) {
          reject(new Error(err))
        }else{
          resolve(result)
        }
      })
    })
  },
  updateVerify: (email) => {
    return new Promise((resolve,reject) => {
      db.query(`UPDATE users SET status=1 WHERE email='${email}'`,
      (err,result) =>{
        err?reject(new Error(err)) : resolve(result)
      })
    })
  },
  deleteUsers: (id) => {
    return new Promise((resolve,reject) => {
      db.query(`DELETE FROM users WHERE id=${id}`, (err,result) => {
        err?reject(new Error(err)) : resolve(result)
      })
    })
  }
  }

module.exports = usersModel