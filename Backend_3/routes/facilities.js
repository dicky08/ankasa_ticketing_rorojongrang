const express = require('express')
const router = express.Router()

// Call Controller
const { getAll, getDetail, insert, update, destroy } = require('../controllers/API/facilitiesController')

router
.get('/api/getAll', getAll)
.get('/api/getDetail/:id',getDetail)
.put('/api/update/:id', update)
.post('/api/insert', insert)
.delete('/api/delete/:id', destroy)


module.exports = router