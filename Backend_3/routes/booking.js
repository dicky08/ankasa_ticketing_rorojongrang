const express = require('express');
const router = express.Router();

// Call Controller
// const {getAllController,getDetailController,insertController,updateController,deleteController} = require('../controllers/API/transactionController')
const {insertController,getAllController,getDetailController,paymentController} = require('../controllers/API/bookingController')
router
.get('/getDetail/:id', getDetailController)
.get('/getAll/:id', getAllController)
.post('/insert', insertController)
.put('/payment/:id', paymentController)
// .delete('/delete/:id', deleteController)

module.exports = router;