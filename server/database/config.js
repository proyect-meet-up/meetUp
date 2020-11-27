const mongoose = require('mongoose');


const dbConexion = async () => {

    try {
        await mongoose.connect(process.env.DB_CONEXION, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

            console.log("¡¡ CONECTADOS A LA BASE DE DATOS YUPPPPIII !!")

    } catch(error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }

}

module.exports = {
    dbConexion: dbConexion
}