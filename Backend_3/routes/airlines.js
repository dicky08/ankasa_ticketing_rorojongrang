const express = require('express')
const airlinesControllers = require('../controllers/API/airlinesControllers')
const router = express.Router()

router
.get('/getall',airlinesControllers.dataAll)
.post('/add', airlinesControllers.addData)

module.exports = router