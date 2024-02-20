const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }, // createdAt: A field representing the creation date of the post, which defaults to the current date and time.
});

module.exports = mongoose.model('Post', postSchema);
