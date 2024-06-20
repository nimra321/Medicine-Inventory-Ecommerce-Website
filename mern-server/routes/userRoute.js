const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const verifyToken = require('../middlewares/verifyToken');
const { route } = require('./orderRoutes');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getOneUser);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.get('/admin/email', userController.getAdmin);
router.patch('/admin/:id', userController.makeAdmin);

module.exports = router;