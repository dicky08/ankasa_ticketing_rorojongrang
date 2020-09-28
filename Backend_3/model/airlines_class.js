const db = require('.././config/database')

const airlinesClass = { 
    getAll: (search, sort, type, limit, offset) => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT *,(SELECT COUNT(*) from airlines_class) AS count, airlines_class.id_class AS id_class
            from airlines_class WHERE name_class LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset},${limit}`,(err,result)=>{
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