const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Birds = require('./models/birds.js')

app.use(express.json());
app.use(express.static('public'));

//create route
app.post('/birds', (req, res) => {
  Birds.create(req.body, (err, createdBird) => {
    res.json(createdBird);
  })
})

//Show route
app.get('/birds', (req, res) => {
  Birds.find({}, (err, foundBirds) => {
    res.json(foundBirds);
  })
})

app.delete('/birds/:id', (req, res)=>{
    Birds.findByIdAndRemove(req.params.id, (err, deletedBird)=>{
        res.json(deletedBird);
    });
});


// EDIT
app.put('/birds/:id', (req, res) => {
  Birds.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedBird) => {
      res.json(updatedBird)
    }
  )
});








mongoose.connect('mongodb://localhost:27017/birds', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});


app.listen(3000, () => {
  console.log("listening");
})
