const jwt = require('jsonwebtoken');


const validarJWT = (req, res, next) => {

    // leer token enviado en el header
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        
        req.uid = uid; // le pasamos al controlador el uid obtenido del token
   
        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
}


module.exports = {
    validarJWT
}