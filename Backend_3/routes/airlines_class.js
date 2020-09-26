const express = require('express')
const airlines_classControllers = require('../controllers/API/airlines_classControllers')
const router = express.Router()

router
.get('/getall',airlines_classControllers.getAll)
.get('/getdetail/:id_class',airlines_classControllers.getDetail)
.post('/add',airlines_classControllers.add)
.put('/update/:id_class', airlines_classControllers.update)
.delete('/delete/:id_class',airlines_classControllers.delete)

module.exports = router
