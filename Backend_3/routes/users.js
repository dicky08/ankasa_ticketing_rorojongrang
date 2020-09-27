const express = require('express');
const router = express.Router();

// Call Controller
const {registerController,verify,updateUsersController,updateed} = require('../controllers/API/usersController')
router
.post('/register', registerController)
.get('/verify/:token', verify)
.put('/update/:id', updateed)

module.exports = router;