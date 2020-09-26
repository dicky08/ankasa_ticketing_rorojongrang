const express = require('express')
const router = express.Router()

// Call Controller
const {getAll} = require('../controllers/API/destination_cityController')

router
.get('/getAll', getAll)

module.exports = router