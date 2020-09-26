// Call Model
const {getAllModel,getDetailModel, InsertModel, updateModel, deleteModel} = require('../../model/destination_cityModel')
// Call Helper
const {success,failed} = require('../../helper/response')
// Definisikan
const destinationCity = {
  getAll: (req,res) => {
    getAllModel() 
    .then((result) => {
      success(res, result, 'Success get all data Destination City')
    }).catch((err) => {
      failed(res,[], err.message)
    });
  },
  getDetail: (req,res) => {
    const id = req.params.id
    getDetailModel(id) 
    .then((result) => {
      success(res, result, 'Success get detail Destination City')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  insertController:(req,res) => {
    const body = req.body
    const code = body.code_arrived.toUpperCase()
    const name = body.city_arrived.toUpperCase()
    const data = {
      code_arrived: code,
      city_arrived: name,
      id_country:body.id_country
    }
    InsertModel(data)
    .then((result) => {
      success(res, result, 'Success Insert data Destination City')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  updateController:(req,res) => {
    const body = req.body
    const id = req.params.id
    const code = body.code_arrived.toUpperCase()
    const name = body.city_arrived.toUpperCase()
    const data = {
      code_arrived: code,
       city_arrived: name,
       id_country:body.id_country
     }
    updateModel(data,id) 
    .then((result) => {
      success(res, result, 'Success update data Destination City')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  deleteController:(req,res) => {
    const id = req.params.id
    deleteModel(id)
    .then((result) => {
      success(res, result, 'Success delete data Destination City')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  }
}

module.exports = destinationCity