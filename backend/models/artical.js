const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  status: String,
  image: String,
});

module.exports = mongoose.model('Article', articleSchema);
