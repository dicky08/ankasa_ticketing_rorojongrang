const db = require('.././config/database')

const airlinesClass = { 
    getAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airlines_class `,(err,result)=>{
                err?reject(new Error(err)) : resolve(result)
            })
        })  
    },
    getDetail: (id) => {
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * from airlines_class where id_class = '${id}'`,(err,result) => {
                err ? reject(new Error(err)) : resolve(result)
            })
        })
    
    },
    add: (data) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into airlines_class (id_class,name_class)values('${data.id_class}','${data.name_class}')`,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    update: (data,id) =>{
        return new Promise(function (resolve, reject) {
                db.query(`UPDATE airlines_class SET name_class ='${data.name_class}' WHERE id_class = '${id}'`, (err, result) => {
                    err ? reject(new Error(err)) : resolve(result)
                })
            })
    },
    delete: (id) => {
        return new Promise((resolve,reject)=>{
            db.query(`DELETE from airlines_class WHERE id_class = ?`,id,(err,result)=>{
                err? reject(new Error(err)) : resolve(result)
            })
        })
    }
}

module.exports = airlinesClass