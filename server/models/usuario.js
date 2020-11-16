
const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
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

// Opcional, para personalizar la data que se envía como respuesta en el json. Extraemos el password del objeto
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('Usuario', UsuarioSchema);