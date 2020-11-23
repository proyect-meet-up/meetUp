
const {response} = require('express');

const Usuario = require('../models/usuario');
const Evento = require('../models/evento');

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


module.exports = {
    getbusquedasCompletas
}