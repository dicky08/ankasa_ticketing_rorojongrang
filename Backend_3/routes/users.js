const express = require('express');
const router = express.Router();

// Call Controller
const {registerController,verify,updateUsersController, loginController} = require('../controllers/API/usersController')
router
.post('/register', registerController)
.get('/verify/:token', verify)
.put('/update/:id', updateUsersController)
.post('/login', loginController)

module.exports = router;