const mongoose = require('mongoose');

const FaceSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
  },
  descriptions: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('Face', FaceSchema);