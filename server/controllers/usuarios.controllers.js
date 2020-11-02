
const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');



const getUsuarios = async (req, res) => {    

    const usuarios = await Usuario.find({}, 'nombre email password' );
    // const usuarios = await Usuario.find(); devuelve toda la información del usuario

    res.json({
        ok: true,
        usuarios
    })
}


const crearUsuario = async (req, res) => {
   // console.log(req.body);

    const { nombre, email, password } = req.body;

    const errores = validationResult(req);

     // https://express-validator.github.io/docs/validation-result-api.html :
    if(!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped() // Returns: an object where the keys are the field names, and the values are the validation errors
        })
    }

    try {

        const existeEmail = await Usuario.findOne({email: email});

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo ya está registrado'
            })
        }

        const usuario = new Usuario(req.body);
        await usuario.save();
    
        res.json({
            ok: true,
            usuario: usuario
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error, ni idea qué narices pasa'
        })
    }

}


module.exports = { getUsuarios, crearUsuario }