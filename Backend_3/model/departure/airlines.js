onst db = require('.././con')

const airlines = {
    dataAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airlines`,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = airlines