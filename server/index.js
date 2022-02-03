const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

const db = require('../database/index.js');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/showMeCow', (req, res) => {
  db.connection.query('SELECT * FROM cows', (err, cows) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(cows);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
