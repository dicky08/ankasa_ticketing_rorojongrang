const express = require('express');
const router = express.Router();

// Call Controller
const {insertController,getAllController,getDetailController,paymentController} = require('../controllers/API/bookingController')
router
.get('/getDetail/:id', getDetailController)
.get('/getAll/:id', getAllController)
.post('/insert', insertController)
.put('/payment/:id', paymentController)

module.exports = router;