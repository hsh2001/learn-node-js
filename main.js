const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');
const mysql = require('promise-mysql');
const mysqlOptions = require('./mysql-options.json');

const testRoute = require('./routes/test');

const app = express();

(async function () {
  const db = await mysql.createConnection(mysqlOptions);
  const results = await db.query('SELECT * FROM topic');
  console.log(results);
})();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pages'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'asdasdwe',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore(mysqlOptions),
}));

app.use((req, res, next) => {
  res.renderError = (errorCode) => {
    res.status(errorCode).render('error', { errorCode });
  };
  next();
});

app.get('/', (req, res) => res.render('index'));
app.use('/test', testRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.renderError(500);
});

app.listen(3000, () => console.log("Listen port 3000..."));