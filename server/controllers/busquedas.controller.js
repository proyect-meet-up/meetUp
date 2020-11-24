
const {response} = require('express');

const Usuario = require('../models/usuario');
const Evento = require('../models/evento');
const Categoria = require('../models/categoria');

const getbusquedasCompletas = async (req, res = response) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');

   /*  const usuarios = await Usuario.find({nombre: regex });
       const eventos = await Evento.find({titulo: regex}) */

    const [usuarios, eventos] = await Promise.all([
        Usuario.find({nombre: regex }),
        Evento.find({titulo: regex})
    ]);

    res.json({
        ok: true,
        usuarios,
        eventos
    })

}

const getDocumentosColeccion = async (req, res = response) => {

    const tabla = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex = new RegExp(busqueda, 'i');
    let data = [];

    switch ( tabla ) {
        case 'eventos':
             data = await Evento.find({titulo: regex});
            
        break;

        case 'categorias':
             data = await Categoria.find({categoria: regex});
           
        break;

        default: 
           return  res.status(400).json({
                ok: false,
                msg: 'La tabla debe ser eventos o categorias'
            })        

    }

    res.json({
        ok: true,
        resultados: data
    })

}

module.exports = {
    getbusquedasCompletas,
    getDocumentosColeccion
}