require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConexion } = require('./database/config');

const app = express();

app.use(cors());

// lectura y parseo del body
// https://expressjs.com/es/api.html#express.json . Colocarlo antes de las rutas
app.use(express.json());

dbConexion();

app.use('/api/usuarios', require('./routes/usuarios.routes'));

app.use('/api/eventos', require('./routes/eventos.routes'));

app.use('/api/localizacion', require('./routes/direccion.routes'));

app.use('/api/categorias', require('./routes/categorias.routes'));

app.use('/api/login', require('./routes/auth.routes'));

app.use('/api/todo', require('./routes/busquedas.routes'));



//console.log(process.env)


app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto' , process.env.PORT);
});

