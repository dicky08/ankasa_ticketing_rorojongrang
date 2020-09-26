const express = require('express')
const router = express.Router()

// Call Controller
const {getAll,getDetail,insertController,updateController, deleteController} = require('../controllers/API/destination_cityController')

router
.get('/getAll', getAll)
.get('/getDetail/:id', getDetail)
.put('/update/:id', updateController)
.post('/insert', insertController)
.delete('/delete/:id', deleteController)

module.exports = router