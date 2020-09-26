const express =  require('express')
const adminControllers = require('../controllers/admin/adminControllers')
const router = express.Router()


router.get('/', adminControllers.viewDashbord)

module.exports = router