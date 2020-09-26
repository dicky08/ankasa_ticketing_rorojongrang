const db = require('../config/database')

const facilities = {
    getAll: (search, sort, type, limit, offset) => {
        return new Promise ((resolve, reject) => {
            db.query(`SELECT * FROM facilities WHERE facilities LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset}, ${limit}`, 
            (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },
    getDetail: (id) => {
        return new Promise ((resolve, reject) => {
            db.query(`SELECT * FROM facilities WHERE id_facilities= '${id}'`, (err, result) => {
                if(err){
                    reject(new Error(err))
                } else {
                    resolve(result)
                }
            })
        })
    },
    insert: (data) => {
        return new Promise ((resolve, reject) => {
            db.query(`INSERT INTO facilities (name_facilities) VALUES ('${data.name_facilities}')`,
            (err, result) => {
                if(err){
                    reject(new Error(err.message))
                }else{
                    resolve(result)
                }
            })
        })
    },
    update: (data, id) => {
        return new Promise ((resolve, reject) => {
            db.query(`UPDATE facilities SET ? WHERE id_facilities = ?`, [data, id], 
            (err, result) => {
                if(err){
                    reject(new Error(err.message))
                }else{
                    resolve(result)
                }
            })
        })
    },
    destroy: (id) => {
        return new Promise ((resolve, reject) => {
            db.query(`DELETE FROM facilities WHERE id_facilities='${id}'`, (err, result) => {
                if(err){
                    reject(new Error(err.message))
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = facilities