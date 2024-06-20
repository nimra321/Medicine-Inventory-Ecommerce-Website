const express = require('express');
const router = express.Router();
const Order = require('../model/order');

router.post('/orders', async (req, res) => {
  try {
    console.log('Received order request:', req.body);

    const { userId, items, total , paymentMethod, shippingAddress } = req.body;
    const newOrder = new Order({ userId, items, total , paymentMethod, shippingAddress });
    const savedOrder = await newOrder.save();

    // You can also update the cart or perform other actions here

    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
