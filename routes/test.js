const { Router } = require('express');
const route = Router();

route.get('/error', (req, res, next) => {
  next(new Error("test error!!!"));
});

route.get('/hello', (req, res, next) => {
  res.send("Hi there!");
});

module.exports = route;