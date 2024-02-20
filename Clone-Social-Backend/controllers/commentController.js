// commentController.js
const Comment = require('../models/comment');

exports.createComment = async (req, res) => {
  try {
    const { postId, content, author } = req.body;
    const comment = new Comment({ postId, content, author });
    await comment.save();
    res.status(201).json({ message: 'Comment created successfully', comment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};