const db = require('.././config/database')

const country = {
    getAll: () => {
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * from country`,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    },
    add: (body) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into country SET ?`,body,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
}

module.exports = country