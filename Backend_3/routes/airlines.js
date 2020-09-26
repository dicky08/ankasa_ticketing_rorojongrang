const express = require('express')
const airlinesControllers = require('../controllers/API/airlinesControllers')
const router = express.Router()

router
.get('/getall',airlinesControllers.dataAll)
.post('/add', airlinesControllers.addData)
.patch('/edit/:id_airlines',airlinesControllers.updData)
.delete('/delete/:id_airlines',airlinesControllers.delete)

module.exports = router