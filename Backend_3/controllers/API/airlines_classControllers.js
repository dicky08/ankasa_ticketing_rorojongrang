const airlinesClassModel = require('../../model/airlines_class')
const response = require('../../helper/response')

const airlinesClass = {
    getAll: (req,res) => {
        try {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_class' : req.query.sort
        const type = !req.query.type?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        
        airlinesClassModel.getAll(search, sort, type, limit, offset)
        .then((result)=> {
            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
                response.successWithMeta(res,result,meta,"Get All airlines Class success")
            })
            .catch((err)=>{
                response.failed(res,[],err.message)
            })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    getDetail: (req,res) =>{
        try {
            const id = req.params.id_class
            airlinesClassModel.getDetail(id).then((result)=>{
                response.success(res,result,'get detail success')
            })
        } catch (err){
            response.failed(res,[],err.message)
        }
    },
    add: (req,res) => {
        try {
        const body = req.body
        airlinesClassModel.add(body)
        .then((result)=>{
            response.success(res,result,"Add airlines Class Success")
            })
        } catch (err){
            response.failed(res,[],err.message)
        }
    },
    update: (req,res) => {
        try {
            const body = req.body
            const id = req.params.id_class
            airlinesClassModel.update(body,id).then((result)=> {
                response.success(res,result,'Update Class Airlines success')
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    },
    delete: (req,res) => {
        try{
            const id = req.params.id_class
            airlinesClassModel.delete(id).then((result)=>{
                response.success(res,result,'Delete class airlines success')
            })
        } catch (err){
            response.failed(res,[],err.message)
        }
    }
}

module.exports = airlinesClass