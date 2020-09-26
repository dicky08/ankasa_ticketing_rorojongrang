const airlinesModel = require('../../model/airlines')
const response = require('../../helper/response')

const airlines = {
    dataAll: (req,res) => {
        try {
            const sortby = !req.query.sortby?'id_airlines':req.query.sortby
            const type = !req.query.type?'ASC': req.query.type
            const name = !req.query.name?'':req.query.name
            const limit = !req.query.limit?7: parseInt(req.query.limit)
            const page = !req.query.page? 1 : parseInt(req.query.page)
            const offset = page ===1?0:(page-1)*limit
            airlinesModel.dataAll(sortby,name,type,limit,offset).then((result)=>{
                response.success(res,result,"Get all airlines success")
            })
        } catch {
            response.failed(res,[],'Internal server error')
        }
    },
    addData: (req,res) => {
        try {
            const data = req.body
            airlinesModel.addData(data)
            .then((result)=>{
                response.success(res,result,"Add data airlines Success")
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