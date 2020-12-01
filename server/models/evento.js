
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
    },
    imagen: {
        type: String,
        default: 'https://source.unsplash.com/random/800x600'
    },
    reservas: {
        type: [{ type : Schema.Types.ObjectId, ref: 'Usuario' }]          
    },
    confirmar: {
        type: Boolean,
        default: false,
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