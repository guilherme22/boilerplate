'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductsSchema = new Schema({
  Nome: String,
  Descricao: String,
  Preco: Number,
});

module.exports = mongoose.model('Products', ProductsSchema);