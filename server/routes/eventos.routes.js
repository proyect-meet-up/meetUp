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
    actualizarEventos,
    reservarEvento,
    obtenerReservasDelUsuario,
    getEventosRersevados
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
    .route('/reservados')
    .get(validarJWT, getEventosRersevados)
    
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
    .delete(borrarEvento)
    
router
    .route('/reservar/:id')
    .put([
        validarJWT,
        check('evento', 'el id del evento debe ser un id válido').isMongoId(),
    ], reservarEvento)

router
    .route('/comprobarReserva/:id/:usuario')
    .get([
        validarJWT,
        check('evento', 'el id del evento debe ser un id válido').isMongoId(),
    ], obtenerReservasDelUsuario)



 module.exports = router;