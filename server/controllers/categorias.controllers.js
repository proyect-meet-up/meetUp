const  Categoria = require('../models/categoria');

const getCategorias = async (req, res) => {
    
    const categorias = await Categoria.find()
   
    res.json({
      ok: true,
      categorias
    })
}

module.exports = {
  getCategorias
}