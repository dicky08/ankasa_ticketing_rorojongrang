// Call Model
const {insertModel,getAllModel,getDetailModel,payment} =require('../../model/bookingModel')
// Call Helper
const {success,faileds,failed,errorImage} = require('../../helper/response')
const uploads = require('../../helper/upload')
const fs = require('fs')
const path = require('path')


module.exports = {
  insertController: async (req,res) => {
    try {
      const body = req.body
      const insertBooking = await insertModel(body)
      success(res,insertBooking,'Insert Booking Success')
    } catch (error) {
      failed(res,[],error.message)
    }
  },
  getAllController: async (req,res) => {
    try {
      const id = req.params.id
      const AllBooking = await getAllModel(id)
      success(res,AllBooking,'Get All Booking Success')
    } catch (error) {
      failed(res,[],error.message)
    }
  },
  getDetailController: async (req,res) => {
    try {
      const id = req.params.id
      const detailBooking = await getDetailModel(id)
      success(res,detailBooking,'Get Detail Booking Success')
    } catch (error) {
      failed(res,[],error.message)
    }
  },
  paymentController:  (req,res) => {
    uploads.single('proof_of_payment') (req,res, async (err) => {
      if (err) {
        if (err.code=== 'LIMIT_FILE_SIZE') {
          faileds(res,'402', [], 'File too large')
        }else{
          faileds(res,'403', [], 'File must be jpg | jpeg or png ')
        }
      }else {
        const id        = req.params.id
        const body  = req.body
        body.proof_of_payment = !req.file?'':req.file.filename
        try {
          const dataBooking = await getDetailModel(id)
          // const dataEmploye = await getDetailbooking(id)
          const newImage = body.proof_of_payment
          if (newImage) {
            //     // With Image
            if (dataBooking[0].proof_of_payment==='payment.jpg') {
              // Change img Default
              const results = await payment(body,id)
              success(res, results, 'Update Booking success')
            }else{
              // Change img after change default
              const result = await payment(body,id)
              // Delete Image
              let oldPath = path.join(__dirname + `/../../public/img/${dataBooking[0].proof_of_payment}`);
              fs.unlink(oldPath, function (err) {
                if (err) throw err;
                console.log('Deleted');
              })
              await payment(body,id)
              success(res, result, 'Update Booking success')
            }
          }else{
            // Without Image
            body.proof_of_payment = dataBooking[0].proof_of_payment
            const result = await payment(body,id)
            success(res, result, 'Update Without Image success')
          }
        } catch (error) {
          failed(res, [], error.message)
        }
      }
    })
  },
}