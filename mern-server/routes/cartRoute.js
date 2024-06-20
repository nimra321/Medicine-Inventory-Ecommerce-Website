const express = require('express');
const Carts = require('../model/cartsModel');
const router = express.Router();

const cartController = require('../controller/cartController')

router.get('/', cartController.getCartByEmail);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.deleteCart);
router.put('/:id', cartController.upDateCart);
router.get('/:id', cartController.getSingleCart);

module.exports = router;