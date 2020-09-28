const express = require('express');
const router = express.Router();

// Call Controller
const {registerController,verify,updateed,getAllUsers,getDetailController,deleteControllerUsers, updateUsersController, loginController} = require('../controllers/API/usersController')
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