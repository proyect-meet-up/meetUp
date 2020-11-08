const { Router } = require('express');

const { getCategorias } = require('../controllers/categorias.controllers');

const router = Router();

router.get('/', getCategorias);

module.exports = router;