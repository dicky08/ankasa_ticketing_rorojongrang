// Call Model
const {getAllModel} = require('../../model/destinationModel')
// Call Helper
const {success,failed} = require('../../helper/response')
// Definisikan
const destination = {
  getAll: (req,res) => {
    getAllModel() 
    .then((result) => {
      success(res, result, 'Get all Destination Success')
    }).catch((err) => {
      failed(res,[], err.message)
    });
  }
}

module.exports = destination