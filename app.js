const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getrequests = require('./getrequests');
const path = require('path');
const Radar = require('radar-sdk-js');
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

getrequests.hello();
const port = 9000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
  console.log('receiving data ...');
  console.log('body is ', req.body);
  res.send(req.body);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
//click button

//get location

//find out if it's outside of the location
