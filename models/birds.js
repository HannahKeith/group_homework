const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  name: String
});

const Birds = mongoose.model('Bird', birdSchema);

module.exports = Birds;
