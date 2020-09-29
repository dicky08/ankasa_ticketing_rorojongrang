const fs = require('fs')
const db = require('.././config/database')

const airlines = { 
    dataAll: (from,to,child,adult,trip,search, sort, type, limit, offset) => {
        return new Promise((resolve,reject)=> {
            db.query(`
            SELECT * from airliness 
            
           
            INNER JOIN transit USING (id_transit)
            INNER JOIN facilities using(id_facilities)
            INNER JOIN departure_time using(id_departure_time)
            INNER JOIN time_arrived USING (id_time_arrived)
            INNER JOIN departure_city USING (id_departure_city)
            INNER JOIN destination_city USING(id)
            INNER JOIN airlines_class USING (id_class)

            WHERE name_airlines LIKE '%${search}%' 
            AND departure_city.name_departure_city LIKE '%${from}%'
            AND destination_city.city_arrived LIKE '%${to}%'
            AND airliness.child LIKE '%${child}%'
            AND airliness.adult LIKE '%${adult}%'
            AND airliness.type LIKE '%${trip}%'
            ORDER BY ${sort} ${type} LIMIT ${offset},${limit}`,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })  
    },
    displayAll: (search,sort,type) => {
        return new Promise((resolve,reject)=>{
            db.query(`
            SELECT * from airliness
            WHERE name_airlines LIKE '%${search}%'
            ORDER BY ${sort} ${type}`,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
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
            (code_airlines,
            name_airlines,
            price,
            image_airlines,
            child,
            adult,
            type,
            rating,
            id_transit,
            id_facilities,
            id_departure_time,
            id_time_arrived,
            id_departure_city,
            id,
            id_class)values
            ('${data.code_airlines}',
            '${data.name_airlines}',
            '${data.price}',
            '${data.image_airlines}',
            '${data.child}',
            '${data.adult}',
            '${data.type}',
            '${data.rating}',
            '${data.id_transit}',
            '${data.id_facilities}',
            '${data.id_departure_time}',
            '${data.id_time_arrived}',
            '${data.id_departure_city}',
            '${data.id}',
            '${data.id_class}')`
            ,data,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    updData: (data,id_air) => {
        
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM airliness WHERE id_airlines = ${id_air}`, (err,result) => {
                if(err) {
                    reject(new Error(err))
                }else{
                    resolve(new Promise((resolve,reject) => {
                        let imgOld = result[0].image_airlines
                        let imgNew = data.image_airlines
                        if(imgOld !== imgNew){
                            fs.unlink(`public/img/${imgOld}`,(err)=> {
                                if(err){
                                    console.log('Data is empty')
                                }
                                console.log('Delete image success')
                            })
                        }
            db.query(`UPDATE airliness SET
            code_airlines = '${data.code_airlines}', 
            name_airlines = '${data.name_airlines}',
            price = '${data.price}',
            image_airlines = '${data.image_airlines}',
            child = '${data.child}',
            adult = '${data.adult}',
            type = '${data.type}',
            rating = '${data.rating}',
            id_transit = '${data.id_transit}',
            id_facilities = '${data.id_facilities}',
            id_departure_time = '${data.id_departure_time}',
            id_time_arrived = '${data.id_time_arrived}',
            id_departure_city = '${data.id_departure_city}',
            id = '${data.id}',
            id_class = '${data.id_class}'
            WHERE id_airlines = '${id_air}'
            `,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
                    }))
                }
            })
         })
            
           /* db.query(`UPDATE airliness SET
            code_airlines = '${data.code_airlines}', 
            name_airlines = '${data.name_airlines}',
            price = '${data.price}',
            image_airlines = '${data.image_airlines}',
            child = '${data.child}',
            adult = '${data.adult}',
            type = '${data.type}',
            rating = '${data.rating}',
            id_transit = '${data.id_transit}',
            id_facilities = '${data.id_facilities}',
            id_departure_time = '${data.id_departure_time}',
            id_time_arrived = '${data.id_time_arrived}',
            id_departure_city = '${data.id_departure_city}',
            id_destinations_city = '${data.id_destinations_city}',
            id_class_airlines = '${data.id_class_airlines}'
            WHERE id_airlines = '${id}'
            `,(err,result)=>{
                err?reject(new Error(err)):resolve(result)
            })
        })
    }, */
},
    delete: (id_air) => {
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM airliness where id_airlines = ${id_air}`,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(new Promise((resolve,reject)=> {
                        const imgOld = result[0].image_airlines
                        fs.unlink(`public/img/${imgOld}`,(err)=>{
                            if(err) throw err;
                            console.log(`Image deleted`) 
                        })
                        db.query(`delete from airliness where id_airlines = '${id_air}'
                          `,(err,result)=>{
                            err ? reject(new Error(err)) : resolve(result)
                        })
                    }))
                }
            })
        })
    }        
}

module.exports = airlines