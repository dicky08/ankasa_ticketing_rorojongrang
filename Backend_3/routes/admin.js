const express =  require('express')
const adminControllers = require('../controllers/admin/adminControllers')
const { route } = require('.')
const router = express.Router()


router.get('/', adminControllers.viewDashbord)
router.get('/departure', adminControllers.viewDeparture)
router.delete('/departure/:id', adminControllers.deleteDeparture)
router.post('/departure', adminControllers.addDeparture)

module.exports = router

