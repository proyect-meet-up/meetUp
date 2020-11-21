const { response } = require('express');

const Evento = require('../models/evento');


const getEventos = (req, res = response) => {
    
    res.json ({
        ok: true,
        msg: 'getEventos'
    })
}

const crearEvento = async (req, res = response) => {
    
    const uid = req.uid;
    
    const evento = new Evento({
        usuario: uid,
        ...req.body
    });
    

    try {

        const eventoDB = await evento.save();

        res.json ({
            ok: true,
            evento: eventoDB
        })    

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error de servidor, ni idea'
        })
    }
}


const actualizarEvento = (req, res = response) => {
    
    res.json ({
        ok: true,
        msg: 'actualizarEvento'
    })
}

const borrarEvento = (req, res = response) => {
    
    res.json ({
        ok: true,
        msg: 'borrarEvento'
    })
}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    borrarEvento
}