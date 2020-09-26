// Call Model
const {getAllModel} = require('../../model/destination_cityModel')
// Call Helper
const {success,Error} = require('../../helper/response')
// Definisikan
const destinationCity = {
  getAll: (req,res) => {
    getAllModel() 
    .then((result) => {
      console.log(result);
    }).catch((err) => {
      Error(res,[], err.message)
    });
  }
}

module.exports = destinationCity