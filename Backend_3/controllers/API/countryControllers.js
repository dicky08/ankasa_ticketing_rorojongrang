
const countryModel = require('../../model/country')
const response = require('../../helper/response')

const country = {
    getAll: (req,res) => {
        try {
        const search = !req.query.search?'' : req.query.search
        const sort = !req.query.sort?'id_country' : req.query.sort
        const type = !req.query.type?'ASC' : req.query.type
        const limit = !req.query.limit? 9 : parseInt(req.query.limit)
        const page = !req.query.page? 1 : parseInt(req.query.page)
        const offset = page===1? 0 : (page-1)*limit
        
        countryModel.getAll(search, sort, type, limit, offset)
        .then((result)=>{
            const totalRow = result[0].count
            const meta = {
                totalRow: totalRow,
                totalPage: Math.ceil(totalRow/limit),
                limit,
                page
            }
            response.successWithMeta(res,result,meta,'Get All Country success')
            })
            .catch((err)=>{
                response.failed(res,[],err.message)
            })
        } catch (err) {
            response.failed(res,[],'Internal server error')
        }
    },
    add: (req,res) => {
        try {
        const body = req.body
        countryModel.add(body)
        .then((result)=>{
            response.success(res,result,"Add Country Success")
            })
        } catch (err){
            response.failed(res,[],err.message)
        }
    },
    getDetail: (req,res) => {
        try {
            const id = req.params.id_country
            countryModel.getDetail(id).then((result)=>{
                response.success(res,result,'Get detail country success')
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    },
    update: (req,res) => {
        try {
            const id = req.params.id_country
            const data = req.body
            countryModel.update(data,id).then((result)=>{
                response.success(res,result,'Update country success')
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    },
    delete: (req,res) => {
        try {
            const id = req.params.id_country
            countryModel.delete(id).then((result)=> {
                response.success(res,result,'Delete Country success')
            })
        } catch (err) {
            response.failed(res,[],err.message)
        }
    }
}

module.exports = country