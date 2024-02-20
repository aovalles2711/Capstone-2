// likeController.js
const Like = require('../models/like');

exports.likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const like = new Like({ postId, userId });
    await like.save();
    res.status(201).json({ message: 'Post liked successfully', like });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
