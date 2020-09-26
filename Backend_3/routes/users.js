const express = require('express');
const router = express.Router();

// Call Controller
const {registerController} = require('../controllers/API/register')
router
.post('/register', registerController)

module.exports = router;