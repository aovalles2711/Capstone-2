// followingController.js
const Following = require('../models/following');

exports.createFollowing = async (req, res) => {
  try {
    const { userId, followingId } = req.body;
    const following = new Following({ userId, followingId });
    await following.save();
    res.status(201).json({ message: 'Following relationship created successfully', following });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};