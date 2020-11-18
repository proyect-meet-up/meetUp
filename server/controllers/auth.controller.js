
const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const login = async(req, res = response) => {

    const { email, password } = req.body

    try {

        const usuarioDB = await Usuario.findOne({ email });
        let { rol } = usuarioDB;
        let respuesta = false;
        rol === 'USUARIO' ? respuesta : respuesta = true;
    

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'el email no encontrado '
            })
        }

        const validarPassword = bcrypt.compareSync(password, usuarioDB.password);
        if (!validarPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'contraseña es incorrecta'
            })
        }

        // generar JWT TOKEN
        const token = await generarJWT(usuarioDB.id);

         // usuarioDB devuelve un document de Mongo, lo pasamos a objeto para obtener sólo los campos y no el resto de información del documento
         let  {  __v, ...usuario } = usuarioDB.toObject();  
      
         delete usuario.rol;  
         delete usuario.password;       

         console.log("el usuario: ", usuario);
       
   
        res.json({
            ok: true,
            token,
            respuesta,
            usuario
             
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error interno, no se puede loguear'
        })
    }
}


module.exports = {
    login
}