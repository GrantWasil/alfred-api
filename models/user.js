const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
    select: false,
  },
  character: {
    type: mongoose.Schema.Tyepes.ObjectId,
    ref: 'character',
  },
});

module.exports = mongoose.model('user', userSchema);
