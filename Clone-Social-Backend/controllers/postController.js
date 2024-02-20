// In this controller file:

// createPost: This function creates a new post by extracting title, content, and author from the request body, creating a new instance of the Post model, and saving it to the database. It returns the created post in the response.
// getPostById: This function retrieves a post by its ID. It takes the post ID from the request parameters, searches for the post in the database, and returns it in the response if found.

const Post = require('../models/post');

exports.createPost = async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const post = new Post({ title, content, author });
      await post.save();
      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
