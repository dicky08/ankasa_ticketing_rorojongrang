const db = require('../config/database')

const transit = {
    getAll: (search, sort, type, limit, offset) => {
        return new Promise ((resolve, reject) => {
            db.query(`SELECT *, (SELECT COUNT(*) FROM transit) AS count, transit.id_transit as id_transit
            FROM transit WHERE name_transit LIKE '%${search}%' ORDER BY ${sort} ${type} LIMIT ${offset}, ${limit}`, 
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
            db.query(`SELECT * FROM transit WHERE id_transit= '${id}'`, (err, result) => {
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
            db.query(`INSERT INTO transit (name_transit) VALUES ('${data.name_transit}')`,
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
            db.query(`UPDATE transit SET ? WHERE id_transit = ?`, [data, id], 
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
            db.query(`DELETE FROM transit WHERE id_transit='${id}'`, (err, result) => {
                if(err){
                    reject(new Error(err.message))
                }else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = transit