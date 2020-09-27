const express =  require('express')
const adminControllers = require('../controllers/admin/adminControllers')
const router = express.Router()
const modelUser = require('../model/usersModel')
const { isLoginDashboard } = require("../helper/isLoggin");

// login
router.get("/signin", adminControllers.viewlogin);
router.post("/signin", adminControllers.actionLogin);
router.use(isLoginDashboard)
router.get('/logout', adminControllers.logout)
router.get('/dashboard', adminControllers.viewDashbord)
// departure 
router.get('/departure', adminControllers.viewDeparture)
router.delete('/departure/:id', adminControllers.deleteDeparture)
router.post('/departure', adminControllers.addDeparture)
router.put('/departure/', adminControllers.updateDeaparture)


// destination city
router.get('/destinationCity', adminControllers.viewDestinationCity)
router.post('/destinationCity', adminControllers.addDestinationCity)
router.delete("/destinationCity/:id", adminControllers.deleteDestination);
router.put("/destinationCity/", adminControllers.updateDestination);

// facilitie
router.get('/facility', adminControllers.viewFacilities)
router.post('/facility', adminControllers.addFacilities)
router.delete('/facility/:id',adminControllers.deleteFacility)
router.put('/facility/', adminControllers.updateFaciity)

// airline class
router.get('/airlineclass', adminControllers.viewAirlineClass)
router.post('/airlineclass', adminControllers.addAilineClass)
router.delete("/airlineclass/:id", adminControllers.deleteairlineclass);
router.put("/airlineclass/", adminControllers.updateairlineClass);


// country
router.get('/country', adminControllers.viewCountry)
router.post('/country', adminControllers.addCountry)
router.delete('/country/:id', adminControllers.deleteCountry)

module.exports = router
