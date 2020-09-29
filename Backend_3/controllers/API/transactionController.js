// Call Model
const {getAllModel,InsertModel,getDetailModel,updateModel,deleteModel} = require('../../model/transactionModel')
// Call Helper
const {success,failed,errorImage} = require('../../helper/response')
// Definisikan Endpoint
const uploads = require('../../helper/upload')
const fs = require('fs')
const path = require('path')

const transactionController = {
  getAllController: (req,res) => {
    getAllModel()
    .then((result) => {
     success(res, result, 'Success get all data Transaction')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  getDetailController: (req,res) => {
    const id = req.params.id
    getDetailModel(id) 
    .then((result) => {
      success(res, result, 'Success get detail Transaction')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  insertController:(req,res) => {
    const body = req.body
    InsertModel(body)
    .then((result) => {
      success(res, result, 'Success Insert data Transaction')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  },
  updateController:(req,res) => {
    uploads.single('proof_of_payment')(req, res, async (err) => {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          errorImage(res, [], 'File too large')
        } else {
          errorImage(res, [], 'File must be jpg | jpeg or png ')
        }
      } else {
        const id = req.params.id_transaction
        const body = req.body
        body.proof_of_payment = !req.file ? '' : req.file.filename
        try {
          console.log(id);
          const dataTransaction = await getDetailModel(id)
        const newImage = body.proof_of_payment
        if (newImage) {
          // With Image
          if (dataTransaction[0].proof_of_payment==='payment.jpg') {
            // Change img Default
            const results = await updateModel(body,id)
            success(res, results, 'Update Transaction default img success')
          }else{
            // Change img after change default
            const result = await updateModel(body,id)
            // Delete Image
            let oldPath = path.join(__dirname + `/../../public/img/${dataTransaction[0].proof_of_payment}`);
            fs.unlink(oldPath, function (err) {
              if (err) throw err;
              console.log('Deleted');
            })
            success(res, result, 'Update Transactions success')
          }
        }else{
          // Without Image
          body.proof_of_payment = dataTransaction[0].proof_of_payment
          const result = await updateModel(body,id)
          success(res, result, 'Update Transaction success')
        }

      } catch (error) {
        failed(res, [], error.message)
      }
    }
  })
  },
  // Delete
  deleteController:(req,res) => {
    const id = req.params.id
    deleteModel(id)
    .then((result) => {
      success(res, result, 'Success delete Transaction')
    }).catch((err) => {
      failed(res, [], err.message)
    });
  }
}

module.exports = transactionController