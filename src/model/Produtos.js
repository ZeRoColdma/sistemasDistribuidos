const mongoose = require('../database/index');

const ProdutosSchema = new mongoose.Schema({
  codigo: { type: Number },
  prodDescricao: { type: String },
  preco: { type: Number },
});

const Produto = mongoose.model('ProdutoInfor', ProdutosSchema);

module.exports = Produto;
