const express = require('express')
const airlinesControllers = require('../controllers/API/airlinesControllers')
const router = express.Router()
const upload = require('../helper/upload')


router
.get('/getall',airlinesControllers.dataAll)
.get('/detail/:id_airlines',airlinesControllers.getDetail)
.post('/insert', airlinesControllers.addData)
.put('/update/:id_airlines',airlinesControllers.updData)
.delete('/delete/:id_airlines',airlinesControllers.delete)

module.exports = router