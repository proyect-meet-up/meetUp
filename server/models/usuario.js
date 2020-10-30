
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String
    },
    imagen: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        default: 'USUARIO'
    }
});

module.exports = model('Usuario', UsuarioSchema);