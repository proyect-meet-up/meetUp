
const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
  categorias: {
    type: [ String ]
  },
  tags: {
    type:[ String ]
  }
});

module.exports = model('Categoria', CategoriaSchema);

