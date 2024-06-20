const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  image_Url: String,
  description: String,
  descriptions: String,
  descriptionss: String,
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;


// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: String,
//   image_Url: String,
//   description: String,
//   descriptions: String,
//   descriptionss: String,
// });

// const BlogModel = mongoose.model('Blog', blogSchema);

// module.exports = BlogModel;
