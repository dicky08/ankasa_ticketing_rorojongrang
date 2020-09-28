const airlinesModel = require('../../model/airlines')
const response = require('../../helper/response')
const upload = require('../../helper/upload')
const { getCount } = require('../../model/airlines')


const airlines = {
    dataAll: async(req,res) => {
        try {
        const search = !req.query.search?'' : req.query.search
        const from = !req.query.from?'':req.query.from
        const sort = !req.query.sort?'id_airlines' : req.query.sort
        const type = !req.query.type?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        const data = await airlinesModel.displayAll(search,sort,type)

        airlinesModel.dataAll(from,search, sort, type, limit, offset)
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
                response.success(res,result,'Get detail Airlines success')
            })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    addData: (req,res) => { 
        try{
        upload.single('image')(req,res,(err) => {
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
            const id = req.params.id_airlines
            airlinesModel.updData(data,id).then((result)=>{
                response.success(res,result,"Update Airlines success")
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    },
    delete: (req,res) => {
        try {
            const id = req.params.id_airlines
            airlinesModel.delete(id).then((result)=>{
                response.success(res,result,"Delete airlines success")
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    }
}

module.exports = airlines