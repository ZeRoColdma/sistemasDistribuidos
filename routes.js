const express = require('express');
const routes = express.Router();

const ProdutoCotroller = require('./src/controller/ProdutosController');

routes.get('/index', ProdutoCotroller.index);
routes.post('/novoproduto', ProdutoCotroller.store);

module.exports = routes;
