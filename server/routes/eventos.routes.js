/*

  ruta:  '/api/eventos'

*/



const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const  {
    getEventos,
    crearEvento,
    actualizarEvento,
    borrarEvento
} = require('../controllers/eventos.controller')

const router = Router();

router.get('/', getEventos);

router.post('/',
    [
        validarJWT,
        check('titulo', 'el título es obligatorio').not().isEmpty(),
        validarCampos
    ], 
    crearEvento);

router.put('/:id', 
    [
       
    ], 
    actualizarEvento);

router.delete('/:id',    
    borrarEvento);


 module.exports = router;