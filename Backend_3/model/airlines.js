const db = require('.././config/database')

const airlines = { 
    dataAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT airlines.id_airlines,airlines.code_airlines ,
             airlines.name_airlines,
            airlines.price,
            airlines.image_airlines,
            airlines.child,
            airlines.adult,
            airlines.type,
            airlines.departure_day
            from airlines`
            ,(err,result)=>{
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
          /*  db.query(`INSERT into airlines 
            (id_airlines,
            code_airlines,
            name_airlines,
            price,
            image_airlines,
            child,
            adult,
            type,
            departure_day,
            rating,
            id_transit,
            id_facilities,
            id_departure_time,
            id_time_arrived)values
            ('${data.id_airlines}',
            '${data.code_airlines}',
            '${data.name_airlines}',
            '${data.price}',
            '${data.image_airlines}',
            '${data.child}',
            '${data.adult}',
            '${data.type}',
            '${data.departure_day}',
            '${data.rating}',
            '${data.id_transit}',
            '${data.id_facilities}',
            '${data.id_departure_time}',
            '${data.id_time_arrived}')`
            */
            db.query(`insert into airlines set ?`,data,(err,result)=>{
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