// routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const protectedController = require('../controllers/protectedController');

// GET /protected - Example protected route
router.get('/protected', verifyToken, protectedController.protectedRoute);

module.exports = router;
