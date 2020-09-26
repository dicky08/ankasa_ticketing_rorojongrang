// Call Model
const {getAllModel,InsertModel,getDetailModel,updateModel,deleteModel} = require('../../model/departure_cityModel')
// Call Helper
const {success,Error} = require('../../helper/response')
// Definisikan Endpoint
const departureController = {
  getAll: (req,res) => {
    getAllModel()
    .then((result) => {
     success(res, result, 'Success get all data Departure City')
    }).catch((err) => {
      Error(res, [], err.message)
    });
  },
  getDetail: (req,res) => {
    const id = req.params.id
    getDetailModel(id) 
    .then((result) => {
      success(res, result, 'Success get detail Departure City')
    }).catch((err) => {
      Error(res, [], err.message)
    });
  },
  insertController:(req,res) => {
    const body = req.body
    const name = body.name_departure_city.toUpperCase()
    const data = {
      code_departure_city: body.code_departure_city,
      name_departure_city: name,
      id_country:body.id_country
    }
    InsertModel(data)
    .then((result) => {
      success(res, result, 'Success get Insert data Departure City')
    }).catch((err) => {
      Error(res, [], err.message)
    });
  },
  updateController:(req,res) => {
    const body = req.body
    const id = req.params.id
    const name = body.name_departure_city.toUpperCase()
    const data = {
      code_departure_city: body.code_departure_city,
       name_departure_city: name,
       id_country:body.id_country
     }
    updateModel(data,id) 
    .then((result) => {
      success(res, result, 'Success update data Departure City')
    }).catch((err) => {
      Error(res, [], err.message)
    });
  },
  deleteController:(req,res) => {
    const id = req.params.id
    deleteModel(id)
    .then((result) => {
      success(res, result, 'Success update data Departure City')
    }).catch((err) => {
      Error(res, [], err.message)
    });
  }
}

module.exports = departureController