const db = require('../config/database')

const departure_time = {
    getAll: (search, sort, type, limit, offset) => {
        return new Promise ((resolve, reject) => {
            db.query(`SELECT *, (SELECT COUNT(*) FROM departure_time) AS count, departure_time.id_departure_time as id_departure_time
            FROM departure_time WHERE time LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset}, ${limit}`, 
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
            db.query(`SELECT * FROM departure_time WHERE id_departure_time= '${id}'`, (err, result) => {
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
            db.query(`INSERT INTO departure_time (time) VALUES ('${data.time}')`,
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
            db.query(`UPDATE departure_time SET ? WHERE id_departure_time = ?`, [data, id], 
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
            db.query(`DELETE FROM departure_time WHERE id_departure_time='${id}'`, (err, result) => {
                if(err){
                    reject(new Error(err.message))
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = departure_time