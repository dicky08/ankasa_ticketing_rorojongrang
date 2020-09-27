const db = require('../config/database')

module.exports = {
    getAll: (req,res) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * from country', (err, result)=> {
                if(err) {
                   reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }
}