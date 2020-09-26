const airlinesModel = require('../../model/airlines')
const response = require('../../helper/response')

const airlines = {
    dataAll: (req,res) => {
        try {
            const sortby = !req.query.sortby?'id':req.query.sortby
            const type = !req.query.type?'ASC': req.query.type
            const name = !req.query.name?'':req.query.name
            const limit = !req.query.limit?7:req.query.limit
            airlinesModel.dataAll().then((result)=>{
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