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

port = process.env.PORT || 3333;

app.listen(port);
