const { Router } = require('express');
const route = Router();

route.get('/error', (req, res, next) => {
  next(new Error("test error!!!"));
});

route.get('/hello', (req, res, next) => {
  res.send("Hi there!");
});

route.get('/session', (req, res, next) => {
  const { session } = req;
  session.num = (session.num || 0) + 1;
  session.save(error => {
    res.send(error? "error!!!" : `num: ${session.num}`);
  });
});

route.get('/session_destroy', (req, res, next) => {
  const { session } = req;
  session.destroy(error => {
    res.send(error? "error!!!" : "success!!!");
  });
});

module.exports = route;