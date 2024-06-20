const Blogs = require('../model/BlogModel')

const getAllBlogs = async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await Blogs.find(query).lean();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
};

const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const filter = { _id: id };
    const result = await Blogs.findOne(filter).lean();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllBlogs,
  getBlogById
}