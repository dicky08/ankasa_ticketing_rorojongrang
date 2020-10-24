const airlinesModel = require('../../model/airlines')
const response = require('../../helper/response')
const upload = require('../../helper/upload')

const airlines = {
    dataAll: async(req,res) => {
        try {
        const search = !req.query.search?'' :  req.query.search
        const from = !req.query.from?'':req.query.from
        const to = !req.query.to?'' : req.query.to
        const trip = !req.query.trip?'' : req.query.trip
        const day = !req.query.departure_day?'' : req.query.departure_day
        const child = !req.query.child?'' : req.query.child
        const adult = !req.query.adult?'' : req.query.adult
        const class_airlines = !req.query.class_airlines?'':req.query.class_airlines
        const transit = !req.query.transit?'':req.query.transit
        const facilities = !req.query.facilities?'':req.query.facilities
        const departureFrom = !req.query.departureFrom?'00:00:00':req.query.departureFrom
        const departureTo = !req.query.departureTo?'24:00:00':req.query.departureTo
        const arrivedFrom = !req.query.arrivedFrom?'00:00:00':req.query.arrivedFrom
        const arrivedTo = !req.query.arrivedTo?'24:00:00':req.query.arrivedTo
        const sort = !req.query.sort?'id_airlines' : req.query.sort
        const type = !req.query.type?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        const data = await airlinesModel.displayAll(search,sort,type)
        airlinesModel.dataAll(search,
                            from,
                            to,
                            trip,
                            day,
                            child,
                            adult,
                            transit,
                            facilities,
                            departureFrom,
                            departureTo,
                            arrivedFrom,
                            arrivedTo,
                            class_airlines,
                            sort, type, limit, offset)
        .then((result)=>{
           const totalRow = data.length
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            response.successWithMeta(res,result,meta,"Get All airlines success")
        })
        .catch((err)=>{
            response.failed(res,[],err.message)
        })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    getDetail: (req,res) => {
        try { 
            const id = req.params.id_airlines
            airlinesModel.getDetail(id).then((result)=>{
              if (result.length < 1) {
                res.json({
                  msg:'Not Found',
                  code: 404
                })
              }
                response.success(res,result,'Get detail Airlines success')
            })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    addData: (req,res) => { 
        try{
        upload.single('image_airlines')(req,res,(err) => {
            if(err){
                if(err.code === 'LIMIT_FILE_SIZE'){
                    response.failed(res,[],'File too large')
                }else{
                    response.failed(res,[],err)
                }
            }   else {
                    const body = req.body
                    body.image_airlines = !req.file?req.file:req.file.filename
                    airlinesModel.addData(body)
                        .then((result)=>{
                            response.success(res,result,"Add Airlines success")
                        })
                    }
                })
            } catch (err){
    response.failed(res,[],err.message)
    }
},
    updData: (req,res) => {
        try {
            const data = req.body
            const id_air = req.params.id_airlines
            data.image_airlines = req.file.filename
            airlinesModel.updData(data,id_air).then((result)=>{
                response.success(res,result,"Update Airlines success")
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    },
    delete: (req,res) => {
        try {
            const id_air = req.params.id_airlines
            airlinesModel.delete(id_air).then((result)=>{
                response.success(res,result,"Delete airlines success")
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    }
}

module.exports = airlines