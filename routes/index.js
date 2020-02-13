const express = require('express');
const route = express.Router();

route.get('/', (req, res) => { 
  console.log("Hello user!");
  res.send('Hello world!');
});

module.exports = route;