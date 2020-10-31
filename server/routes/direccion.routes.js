const { Router } = require('express');
const { getProvincias } = require('../controllers/direccion.controllers');

const router = Router();

router.use('/provincias', getProvincias);

module.exports = router;