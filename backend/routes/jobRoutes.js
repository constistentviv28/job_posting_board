// backend/routes/jobRoutes.js
const express = require('express');
const { postJob } = require('../controllers/jobController');
const { authenticate } = require('../middleware/authMiddleware'); // You will implement this
const router = express.Router();

router.post('/', authenticate, postJob);

module.exports = router;
