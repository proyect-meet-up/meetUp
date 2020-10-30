
const Usuario = require('../models/usuario');



const getUsuarios = (req, res) => {    
    res.json({
        ok: true,
        msg: "desde el json"
    })
}


const crearUsuario = async (req, res) => {
    console.log(req.body);

    const { nombre, email, password } = req.body;

    const usuario = new Usuario(req.body);
    await usuario.save();

    res.json({
        ok: true,
        usuario: usuario
    });
}


module.exports = { getUsuarios, crearUsuario }