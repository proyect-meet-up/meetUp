const { Schema, model } = require('mongoose');


const DireccionSchema = Schema({
  calle: {
    type: String,
    require: true
  },
  numero: {
    type: String || Number
  },
  provincia: {
    type: String
  },
  codigo: {
    type: String
  }
}) 

module.exports = model('Direccion', DireccionSchema);