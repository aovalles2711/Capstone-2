// followerController.js
const Follower = require('../models/follower');

exports.createFollower = async (req, res) => {
  try {
    const { userId, followerId } = req.body;
    const follower = new Follower({ userId, followerId });
    await follower.save();
    res.status(201).json({ message: 'Follower created successfully', follower });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};