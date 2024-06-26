const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  menuItemId: String,
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    image: String, 
    price: Number,
    quantity: Number,
    email:{
        type: String,
        true: true,
        required: true,
    }
});

const Carts = mongoose.model('Cart', cartSchema);

module.exports = Carts;
