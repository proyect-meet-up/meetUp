
/*
    Ruta: /api/usuarios
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios.controllers');


const router = Router();

router.get('/', getUsuarios);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
], crearUsuario);

router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),    
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
], actualizarUsuario);

router.delete('/:id', borrarUsuario);


 module.exports = router;