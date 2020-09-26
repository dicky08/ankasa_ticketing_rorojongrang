const express = require('express')
const airlines_classControllers = require('../controllers/API/airlines_classControllers')
const airlinesClass = require('../model/airlines_class')
const router = express.Router()

router
.get('/getall',airlines_classControllers.getAll)
.post('/add',airlines_classControllers.add)
.patch('/update/:id_class', airlines_classControllers.update)
.delete('/delete/:id_class',airlines_classControllers.delete)

module.exports = router
