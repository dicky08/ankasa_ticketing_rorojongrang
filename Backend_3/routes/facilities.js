const express = require('express')
const router = express.Router()

// Call Controller
const { getAll, getDetail, insert, update, destroy } = require('../controllers/API/facilitiesController')

router
.get('/getAll', getAll)
.get('/getDetail/:id',getDetail)
.put('/update/:id', update)
.post('/insert', insert)
.delete('/delete/:id', destroy)


module.exports = router