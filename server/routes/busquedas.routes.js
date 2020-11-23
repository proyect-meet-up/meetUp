/*

    api/todo/:busqueda

*/

const { Router } = require('express');
const { getbusquedasCompletas } = require('../controllers/busquedas.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:busqueda', validarJWT, getbusquedasCompletas)

module.exports = router;

