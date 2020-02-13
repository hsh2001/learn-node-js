const express = require('express');

const indexRoute = require('./routes/index');
const testRoute = require('./routes/test');

const app = express();

app.use(express.static('./public'));

app.use('/', indexRoute);
app.use('/test', testRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log("Listen port 3000..."));