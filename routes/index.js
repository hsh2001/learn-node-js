const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('index', {
    name: "Express",
  });
});

module.exports = route;