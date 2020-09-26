const express = require('express')
const router = express.Router()

// Call Controller
const { getAll,insertController,getDetail,updateController,deleteController } = require('../controllers/API/departure_cityController')

router
.get('/getAll', getAll)
.get('/getDetail/:id',getDetail)
.put('/update/:id', updateController)
.post('/insert', insertController)
.delete('/delete/:id', deleteController)


module.exports = router