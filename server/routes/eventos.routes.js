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

router
    .route('/')
    .get(getEventos)
    .post([
        validarJWT,
        check('titulo', 'el título es obligatorio').not().isEmpty(),
        check('categoria', 'el id de la categoría debe ser un id válido').isMongoId(),
        validarCampos
    ], 
    crearEvento);

router
    .route('/:id')
    .put(actualizarEvento)
    .delete(borrarEvento);


 module.exports = router;