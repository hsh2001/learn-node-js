const express = require('express');
const app = express();

app.get('/', (req, res) => { 
  console.log("Hello user!");
  res.send('Hello world!');
});

app.listen(3000, () => console.log("Listen port 3000..."));