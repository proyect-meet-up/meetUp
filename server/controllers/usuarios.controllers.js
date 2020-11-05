
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const usuario = require('../models/usuario');



const getUsuarios = async (req, res) => {    

    const usuarios = await Usuario.find({}, 'nombre email password' );
    // const usuarios = await Usuario.find(); devuelve toda la información del usuario

    res.json({
        ok: true,
        usuarios
    })
}


const crearUsuario = async (req, res) => {
  
    const { email, password } = req.body;


    try {

        const existeEmail = await Usuario.findOne({email: email});

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo ya está registrado'
            })
        }

        const usuario = new Usuario(req.body);

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

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

const actualizarUsuario = async (req, res) => {

    // TODO: Validar token y comprobar si es el usuario correcto

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById (uid);

        if (!usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado en la base de datos'
            })
        }

        const { password, email, ...campos } = req.body; // evitamos así pisar ese campo en la base de datos. Campos ahora ya no tendrá password

        if (usuarioDB.email !== email ) {
            const existeEmail = await Usuario.findOne( { email });
            if ( existeEmail ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email.'
                })
            }
        }        
        
        campos.email = email;
        const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, {new: true} );

        res.json({
            ok: true,
            usuario: usuarioActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al intentar actualizar el usuario'
        })
    }

}


module.exports = { 
    getUsuarios,
    crearUsuario,
    actualizarUsuario
}