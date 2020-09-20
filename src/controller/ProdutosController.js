const express = require('express');

const Produto = require('../model/Produtos');

module.exports = {
  async index(req, res) {
    const data = await Produto.find();

    return res.json(data);
  },

  async store(req, res) {
    const { codigo, prodDescricao, preco } = req.body;

    const data = await Produto.create({
      codigo,
      prodDescricao,
      preco,
    });

    res.json(data);
  },
};
