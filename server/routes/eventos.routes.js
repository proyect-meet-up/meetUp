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
        check('categoria', 'el id de la categoría debe ser un id válido').isMongoId(),
        validarCampos
    ], 
    crearEvento);

router.put('/:id', 
    [
        validarJWT,
        check('evento', 'el id del evento debe ser un id válido').isMongoId(),
    ], 
    actualizarEvento);

router.delete('/:id',    
    borrarEvento);


 module.exports = router;