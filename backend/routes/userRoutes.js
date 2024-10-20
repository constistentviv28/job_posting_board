// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, verifyUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);
router.get('/verify/:email', verifyUser);

module.exports = router;
