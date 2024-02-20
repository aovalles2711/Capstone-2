// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// POST /posts - Create a new post
router.post('/posts', postController.createPost);

// GET /posts/:id - Get a post by ID
router.get('/posts/:id', postController.getPostById);
router.get('/posts', postController.getAllPosts);

module.exports = router;
