const db = require('.././config/database')

const country = {
    getAll: (search, sort, type, limit, offset) => {
        return new Promise((resolve,reject)=>{
            db.query(`SELECT *,(SELECT COUNT(*) from country) AS count, country.id_country AS id_country
            from country WHERE name_country LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset},${limit}`,(err,result)=>{
               err?reject(new Error(err)):resolve(result)
            })
        })
    },
    add: (data) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into country 
            (id_country,
            code_country,
            name_country)VALUES
            ('${data.id_country}',
            '${data.code_country}',
            '${data.name_country}')`
            ,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    getDetail: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from country where id_country = ${id} `,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    },
    update: (data,id) => {
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE country set 
            code_country = '${data.code_country}',
            name_country = '${data.name_country}' 
            where id_country = '${id}'`
            ,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`DELETE from country where id_country = '${id}'`,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    }
}

module.exports = country