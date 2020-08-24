const
  express = require('express'),
  app = express(),
  fs = require('fs'),
  bodyParser = require('body-parser');

const
  host = 'localhost',
  port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const
  Identify = require('./klaviyo/Identify.js'),
  StartedCheckout = require('./klaviyo/StartedCheckout.js');

app.route('/')
  .get((req, res) => {
    res.send(`
      <a href="/identify">Identify</a>
      <a href="/startedcheckout">StartedCheckout</a>
    `)
  })
app.use('/', Identify);
app.use('/', StartedCheckout);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));