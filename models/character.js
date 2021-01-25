const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  traits: {
    type: String,
  },
  bio: {
    type: String,
  },
  goals: [String],
  others: [String],
  items: [String],
  tips: [String],
  abilities: [String],
  secret: {
    type: String,
  },
  clue: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('character', characterSchema);
