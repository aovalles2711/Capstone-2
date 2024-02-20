// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /users - Create a new user
router.post('/users', userController.createUser);

// GET /users/:id - Get a user by ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
