
const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
  categoria: String
});

module.exports = model('Categoria', CategoriaSchema);

