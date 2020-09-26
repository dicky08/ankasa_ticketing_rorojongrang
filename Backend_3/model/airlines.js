const db = require('.././config/database')

const airlines = { 
    dataAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airlines `,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })  
    },
    getDetail: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airlines WHERE id_airlines = '${id}'`,(err,result)=>{
                err?reject(new Error(err)) : resolve(result)
            })
        })
    },
    addData: (data) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into airlines SET ?`,data,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    updData: (data,id) => {
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE airlines SET? WHERE id_airlines = ?`,[data,id],(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`DELETE from airlines WHERE id_airlines = ?`, id,(err,result)=> {
                err?reject(new Error(err)):resolve(result)
            })
        })
    }
}

module.exports = airlines