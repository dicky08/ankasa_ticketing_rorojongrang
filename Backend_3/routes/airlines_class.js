const express = require('express')
const airlines_classControllers = require('../controllers/API/airlines_classControllers')
const router = express.Router()

router
.get('/getall',airlines_classControllers.getAll)
.post('/add',airlines_classControllers.add)

module.exports = router
