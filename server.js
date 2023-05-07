const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  console.log('Hello');
});

app.listen(3000, function () {
  console.log('listening on 3000');
});
