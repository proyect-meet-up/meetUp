
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');



const getUsuarios = async (req, res) => {    

    const usuarios = await Usuario.find({}, 'nombre email password' );
    // const usuarios = await Usuario.find(); devuelve toda la información del usuario
    res.json({
        ok: true,
        usuarios,
        uid: req.uid
    })
}


const comprobacionEmailUsuario = async (req, res) => {

    const {email} = req.params; 
    const existeEmail = await Usuario.findOne({email});

    try {
        if ( existeEmail ) {
            return res.json({
                ok: false,
                msg: 'El correo ya existe'
            })
        }
    
        res.json({
            ok: true,
            msg: 'El correo no está registrado'
        })

    } catch {

        res.status(500).json({
            ok: false,
            msg: 'Error, ni idea qué narices pasa'
        })
    }

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

        // generar JWT TOKEN
        const token = await generarJWT(usuario.id);
    
        res.json({
            ok: true,
            usuario: usuario,
            token
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
        
        // NOTA: Al usar la query findByIdAndUpdate, la librería monggose nos pide añadirle como opción useFindAndModify: false para resolver la advercentia de depreciación
        // Link: https://stackoverflow.com/questions/52572852/deprecationwarning-collection-findandmodify-is-deprecated-use-findoneandupdate
        
        const usuarioActualizadoDB = await Usuario.findByIdAndUpdate( uid, campos, {new: true, useFindAndModify: false} );
        const { rol, __v, ...usuarioActualizado} = usuarioActualizadoDB.toObject();
        delete usuarioActualizado.password;
        
        res.json({
            ok: true,
            usuarioActualizado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al intentar actualizar el usuario'
        })
    }

}


const borrarUsuario = async (req, res) => {
    
    const uid = req.params.id;
   
    const usuarioDB = await Usuario.findById (uid);

    if (!usuarioDB ) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario no encontrado en la base de datos'
        })
    }

    await Usuario.findByIdAndDelete(uid);

    try {
        res.json({
            ok: true,
            msg: 'usuario eliminado'
        })

    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no se pudo borrar, error 500'
        })
        
    }

}


module.exports = { 
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    comprobacionEmailUsuario
}