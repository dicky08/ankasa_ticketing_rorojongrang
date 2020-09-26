const db = require('.././config/database')

const airlinesClass = { 
    getAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airlines_class `,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })  
    },
    add: (body) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into airlines_class SET ?`,body,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
}

module.exports = airlinesClass