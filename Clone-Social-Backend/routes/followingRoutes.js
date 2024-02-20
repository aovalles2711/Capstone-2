// routes/followingRoutes.js
const express = require('express');
const router = express.Router();
const followingController = require('../controllers/followingController');

// POST /following - Create a new following relationship
router.post('/following', followingController.createFollowing);

// GET /following/:id - Get users followed by a user by ID
router.get('/following/:id', followingController.getFollowingByUserId);

module.exports = router;
