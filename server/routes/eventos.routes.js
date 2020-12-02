/*

  ruta:  '/api/eventos'

*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const  {
    getEventos,
    getEvento,
    crearEvento,
    actualizarEvento,
    borrarEvento,
    getEventosDelUsuario,
    actualizarEventos
} = require('../controllers/eventos.controller')

const router = Router();

router
    .route('/')
    .get(getEventos)
    .post([
        validarJWT,
        check('titulo', 'el título es obligatorio').not().isEmpty(),
        check('categoria', 'el id de la categoría debe ser un id válido').isMongoId(),
        validarCampos
    ], 
    crearEvento)
    .patch(validarJWT, actualizarEventos)
    
router
    .route('/usuario')
    .get(validarJWT, getEventosDelUsuario)



router
    .route('/:id')
    .get(getEvento)
    .put([
        validarJWT,
        check('evento', 'el id del evento debe ser un id válido').isMongoId(),
    ], actualizarEvento)
    .delete(borrarEvento);



 module.exports = router;