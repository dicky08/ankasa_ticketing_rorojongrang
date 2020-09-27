const express = require('express')
const router = express.Router()

// Call Controller
const {getAll} = require('../controllers/API/destinationControllers')

router
.get('/getAll', getAll)

module.exports = router