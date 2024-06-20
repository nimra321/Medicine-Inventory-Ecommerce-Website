// model/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  state2: { type: String, required: true },
  number: { type: String, required: true },
  info: { type: String, required: true },
});

const Order1 = mongoose.model('Order', orderSchema);

module.exports = Order1;
