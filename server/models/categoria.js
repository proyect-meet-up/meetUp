
const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
  categoria: {
    type: String
  },
  color: {
    type: String
  } 
});

module.exports = model('Categoria', CategoriaSchema);

