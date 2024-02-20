// routes/followerRoutes.js
const express = require('express');
const router = express.Router();
const followerController = require('../controllers/followerController');

// POST /followers - Create a new follower relationship
router.post('/followers', followerController.createFollower);

// GET /followers/:id - Get followers of a user by ID
router.get('/followers/:id', followerController.getFollowersByUserId);

module.exports = router;
