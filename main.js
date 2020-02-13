const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => { 
  console.log("Hello user!");
  res.send('Hello world!');
});

app.get('/test/error', (req, res, next) => {
  next(new Error("test error!!!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log("Listen port 3000..."));