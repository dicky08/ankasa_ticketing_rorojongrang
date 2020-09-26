const countryControllers = require('../controllers/API/countryControllers')
const express = require('express')
const router = express.Router()

router
.get('/getall',countryControllers.getAll)
.get('/getdetail/:id_country',countryControllers.getDetail)
.post('/add',countryControllers.add)
.put('/update/:id_country',countryControllers.update)
.delete('/delete/:id_country',countryControllers.delete)

module.exports = router