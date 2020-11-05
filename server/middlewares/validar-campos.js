
const { validationResult } = require('express-validator');
const { response } = require('express');

const validarCampos = (req, res, next) => {

    const errores = validationResult(req);

     // https://express-validator.github.io/docs/validation-result-api.html :
     
    if( !errores.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errores: errores.mapped() // Returns: an object where the keys are the field names, and the values are the validation errors
        })
    }

    next();

}

module.exports = {
    validarCampos
}