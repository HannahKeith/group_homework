const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Birds = require('./models/birds.js')

app.use(express.json());
app.use(express.static('public'));

app.post('/birds/', (req, res) => {
  Birds.create(req.body, (err, createdBird) => {
    res.json(createdBird);
  })
})

app.get('/birds/', (req, res) => {
  Birds.find({}, (err, foundBirds) => {
    res.json(foundBirds);
  })
})

mongoose.connect('mongodb://localhost:27017/birds', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});


app.listen(3000, () => {
  console.log("listening");
})
