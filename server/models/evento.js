
const { Schema, model } = require('mongoose');


const EventoSchema = Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String
    },
    direccion: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Direccion'
    },
    categoria: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Categoria'
    },  
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    precio: {
        type: Number
    },
    fecha: {
        type: Date
    }, 
    tags: {
        type: [ String ]
    }
    
},{
    timestamps: true
});

// Opcional, para personalizar la data que se envía como respuesta en el json. Extraemos el password del objeto
EventoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();  
    return object;
})


module.exports = model('Evento', EventoSchema);