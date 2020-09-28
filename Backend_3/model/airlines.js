const db = require('.././config/database')

const airlines = { 
    dataAll: (search, sort, type, limit, offset) => {
        return new Promise((resolve,reject)=> {
            db.query(`
            SELECT 
            airliness.id_airlines,
            airliness.code_airlines,
            airliness.name_airlines,
            airliness.price,
            airliness.image_airlines,
            airliness.child,
            airliness.adult,
            airliness.type,
            airliness.departure_day,
            airliness.rating,
            transit.name_transit,
            facilities.name_facilities,
            departure_time.time,
            time_arrived.time_arr,
            departure_city.name_departure_city,
            airliness.id_destinations_city,
            airliness.id_class_airlines
            from airliness 
            JOIN transit USING (id_transit)
            JOIN facilities using(id_facilities)
            JOIN departure_time using(id_departure_time)
            JOIN time_arrived USING (id_time_arrived)
            JOIN departure_city USING (id_departure_city)
            
            WHERE name_airlines LIKE '%${search}%' 
            
            ORDER BY ${sort} ${type} LIMIT ${offset},${limit}`,(err,result)=>{
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })  
    },
    displayAll: (sort,type) => {
        return new Promise((resolve,reject)=>{
            db.query(`
            SELECT 
            airliness.id_airlines,
            airliness.code_airlines,
            airliness.name_airlines,
            airliness.price,
            airliness.image_airlines,
            airliness.child,
            airliness.adult,
            airliness.type,
            airliness.departure_day,
            airliness.rating,
            airliness.id_transit,
            airliness.id_facilities,
            airliness.id_departure_time,
            airliness.id_time_arrived,
            airliness.id_departure_city,
            airliness.id_destinations_city,
            airliness.id_class_airlines
            from airliness
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
            id_destinations_city,
            id_class_airlines)values
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
            '${data.id_destinations_city}',
            '${data.id_class_airlines}')`
            ,data,(err,result)=>{
                err? reject(new Error(err)) :resolve(result)
            })
        })
    },
    updData: (data,id) => {
        return new Promise((resolve,reject)=>{
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
            id_destinations_city = '${data.id_destinations_city}',
            id_class_airlines = '${data.id_class_airlines}'
            WHERE id_airlines = '${id}'
            `,(err,result)=>{
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