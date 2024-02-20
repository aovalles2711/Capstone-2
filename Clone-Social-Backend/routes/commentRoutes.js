// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// POST /comments - Create a new comment
router.post('/comments', commentController.createComment);

// GET /comments/:id - Get a comment by ID
router.get('/comments/:id', commentController.getCommentById);

module.exports = router;
