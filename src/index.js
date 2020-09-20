const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.use(function (req, res, next) {
  req.io = io;
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

port = process.env.PORT || 3333;

app.listen(port);
