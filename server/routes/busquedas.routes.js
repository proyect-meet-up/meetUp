/*

    api/todo/

*/

const { Router } = require('express');
const { getbusquedasCompletas, getDocumentosColeccion } = require('../controllers/busquedas.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getbusquedasCompletas);

router.get('/coleccion/:tabla/:busqueda', getDocumentosColeccion);

module.exports = router;

