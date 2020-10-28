require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConexion } = require('./database/config');

const app = express();

app.use(cors());

dbConexion();

console.log(process.env)

app.get('/', (req, res) => {
   // res.send("somos la pera");
    res.json({
        ok: true,
        msg: "desde el json"
    })
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto' , process.env.PORT);
});

