
const countryModel = require('../../model/country')
const response = require('../../helper/response')

const country = {
    getAll: (req,res) => {
        try {
            countryModel.getAll().then((result)=>{
                response.success(res,result,'Get All COuntry success')
            })
        } catch (err) {
            response.failed(res,[],'internal server error')
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