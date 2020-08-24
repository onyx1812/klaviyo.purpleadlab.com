const
  express = require('express'),
  app = express(),
  fs = require('fs'),
  bodyParser = require('body-parser');

const host = 'localhost';
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.route('/')
  .get((req, res) => {
    res.send('Hello World!')
  })
  .post((req, res) => {

  })
  .put((req, res) => {

  })
  .delete((req, res) => {

  });

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));