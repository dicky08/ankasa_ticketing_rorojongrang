const countryControllers = require('../controllers/API/countryControllers')
const express = require('express')
const country = require('../model/country')
const router = express.Router()

router
.get('/getall',countryControllers.getAll)
.post('/add',countryControllers.add)

module.exports = router