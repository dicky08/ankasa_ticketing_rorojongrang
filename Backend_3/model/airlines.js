const db = require('.././config/database')

const airlines = { 
    dataAll: () => {
        return new Promise((resolve,reject)=> {
            db.query(`SELECT * from airliness`
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
            db.query(`SELECT * from airliness WHERE id_airlines = '${id}'`,(err,result)=>{
                err?reject(new Error(err)) : resolve(result)
            })
        })
    },
    addData: (data) => {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT into airliness 
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
            id_time_arrived,
            id_departure_city,
            id_destinations_city,
            id_class_airlines)values
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
            '${data.id_time_arrived}',
            '${data.id_departure_city}',
            '${data.id_destinations_city}',
            '${data.id_class_airlines}')`
            ,data,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    updData: (data,id) => {
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE airliness SET? WHERE id_airlines = ?`,[data,id],(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    },
    delete: (id) => {
        return new Promise((resolve,reject)=> {
            db.query(`DELETE from airliness WHERE id_airlines = ${id}`,(err,result)=> {
                err?reject(new Error(err)):resolve(result)
            })
        })
    }
}

module.exports = airlines