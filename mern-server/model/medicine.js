const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  medicineDescription: {
    type: String,
    required: true,
  },
  medicinePricePKR: {
    type: Number,
    validate: {
      validator: function (value) {
        // If the value is a string, attempt to convert it to a number
        if (typeof value === 'string') {
          value = parseFloat(value);
        }
        return !isNaN(value) && typeof value === 'number';
      },
      message: 'Invalid medicinePricePKR value',
    },
  },
  DrugForm: {
    type: String,
    required: true,
  },
  ManufacturedBy: {
    type: String,
    required: true,
  },
  PackSize: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
