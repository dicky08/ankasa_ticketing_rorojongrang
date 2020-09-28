const express = require('express');
const router = express.Router();

// Call Controller
const {getAllController,getDetailController,insertController,updateController,deleteController} = require('../controllers/API/transactionController')
router
.get('/getAll', getAllController)
.get('/getDetail/:id', getDetailController)
.post('/insert', insertController)
.put('/update/:id_transaction', updateController)
.delete('/delete/:id', deleteController)

module.exports = router;