// routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// POST /likes - Create a new like
router.post('/likes', likeController.createLike);

// GET /likes/:id - Get a like by ID
router.get('/likes/:id', likeController.getLikeById);

module.exports = router;
