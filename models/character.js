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
  preview: {
    type: String,
    default: ' ',
  },
  bio: {
    type: String,
    default: ' ',
  },
  goals: [
    {
      name: String,
      text: String,
    },
  ],
  others: [
    {
      name: String,
      text: String,
    },
  ],
  items: [String],
  tips: [String],
  abilities: [
    {
      name: String,
      text: String,
      uses: Number,
    },
  ],
  secret: {
    type: String,
  },
  clue: {
    type: String,
  },
  money: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('character', characterSchema);
