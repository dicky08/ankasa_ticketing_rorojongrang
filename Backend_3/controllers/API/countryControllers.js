
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
    }
}

module.exports = country