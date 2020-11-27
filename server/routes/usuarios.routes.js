
/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { 
    getUsuarios, 
    crearUsuario, 
    actualizarUsuario, 
    comprobacionEmailUsuario,
    borrarUsuario
} = require('../controllers/usuarios.controllers');

const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router
    .route('/')
    .get(validarJWT, getUsuarios)
    .post([
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('rol').isEmpty(),
    validarCampos
], crearUsuario);

router
    .route('/:id')
    .put( [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),    
        // check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    actualizarUsuario)
    .delete(validarJWT, borrarUsuario);

router
    .route('/:email')
    .get(comprobacionEmailUsuario)


 module.exports = router;