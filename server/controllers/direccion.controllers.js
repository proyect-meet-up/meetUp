const Direccion = require('../models/direccion');
const fetch = require('node-fetch');
let url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=provincias-espanolas&q=&rows=52&sort=provincia';

const getProvincias = (req, res) => {
  fetch(url)
    .then( res =>  res.json())
    .then( body => {
      res.json({
        body
      })
    })
}

module.exports = { getProvincias }