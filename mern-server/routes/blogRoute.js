const express = require('express');
const Blogs = require('../model/BlogModel');
const router = express.Router();

const blogController = require('../controller/BlogController');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);

module.exports = router;