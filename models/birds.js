const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  type: String
});

const Birds = mongoose.model('Bird', birdSchema);

module.exports = Birds;
