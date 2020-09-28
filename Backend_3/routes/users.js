const express = require('express');
const router = express.Router();

// Call Controller
<<<<<<< HEAD

const {registerController,verify,updateed,getAllUsers,deleteControllerUsers, updateUsersController, loginController} = require('../controllers/API/usersController')
=======
const {registerController,verify,updateed,getAllUsers,deleteControllerUsers,getDetailController} = require('../controllers/API/usersController')
>>>>>>> 247a1f4ee3f60de4a91dbd84b28069cf37e456b2
router
.get('/getAll', getAllUsers)
.get('/getDetail/:id', getDetailController)
.get('/verify/:token', verify)
.put('/update/:id', updateUsersController)
.post('/login', loginController)
.post('/register', registerController)
.put('/update/:id', updateed)
.delete('/delete/:id', deleteControllerUsers)

module.exports = router;