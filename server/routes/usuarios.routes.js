
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

router.get('/:email', comprobacionEmailUsuario)
router.get('/', validarJWT, getUsuarios);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('rol').isEmpty(),
    validarCampos
], crearUsuario);

router.put('/:id', 
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(), 
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),    
        // check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ], 
    actualizarUsuario);

router.delete('/:id',
    validarJWT,
    borrarUsuario);


 module.exports = router;