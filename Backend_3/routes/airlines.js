const express = require('express')
const airlinesControllers = require('../controllers/airlines/airlinesControllers')
const router = express.Router()

router.get('/airlines',airlinesControllers)

module.exports = router