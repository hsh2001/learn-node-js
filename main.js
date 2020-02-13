const express = require('express');
const path = require('path');

const indexRoute = require('./routes/index');
const testRoute = require('./routes/test');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/test', testRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log("Listen port 3000..."));