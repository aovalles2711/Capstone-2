// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /auth/register - Register a new user
router.post('/auth/register', authController.register);

// POST /auth/login - User login
router.post('/auth/login', authController.login);

module.exports = router;
