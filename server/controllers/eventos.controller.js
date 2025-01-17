const { response } = require('express');
const mongoose = require('mongoose');

const Evento = require('../models/evento');
const Direccion = require('../models/direccion');

const getEventosRersevados =  async ( req , res ) => {
		const usuarioId = req.uid;
		const eventosDB = await Evento.find({ reservas: usuarioId })
			.select('tags imagen _id titulo descripcion precio fecha')
			.populate('categoria', 'categoria color')
			.populate('direccion', 'calle numero provincia codigo');

		res.json({
			ok: true,
			eventos: eventosDB
		});
} 

const getEventos = async (req, res = response) => {
	const eventos = await Evento.find()
		.populate('usuario', 'nombre email')
		.populate('categoria', 'categoria color')
		.populate('direccion', 'calle numero provincia codigo');

	res.json({
		ok: true,
		total: eventos.length,
		eventos
	});
};

const getEvento = async (req, res = response) => {
	const evento = await Evento.findById(req.params.id)
	.populate( 'direccion','calle numero localidad provincia codigo')
	.populate( 'usuario', 'nombre imagen')
	.populate( 'categoria', 'categoria color' )

	res.json({
		ok: true,
		evento
	});
};

const getEventosDelUsuario = async (req, res = response) => {
	const eventos = await Evento.find({ usuario: req.uid })
		.populate('usuario', 'nombre email')
		.populate('categoria', 'categoria color')
		.populate('direccion', 'calle numero provincia codigo');
	const total = await Evento.find({ usuario: req.uid }).countDocuments();

	res.status(200).json({
		ok: true,
		total,
		eventos
	});
};

const crearEvento = async (req, res = response) => {
	const uid = req.uid;

	try {
		// https://masteringjs.io/tutorials/mongoose/create
		const nuevaDireccion = await Direccion.create(req.body.direccion);

		let { direccion, ...rest } = req.body;

		const evento = new Evento({
			usuario: uid,
			direccion: nuevaDireccion._id,
			...rest
		});

		const eventoDB = await evento.save();

		res.status(201).json({
			ok: true,
			evento: eventoDB
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error de servidor, ni idea'
		});
	}
};

const actualizarEvento = async (req, res = response) => {
	const idEvento = req.params.id;
	let datos = req.body;

	
	try {
		const evento = await Evento.findById({ _id: idEvento });
		
		const direccionNueva = await Direccion.findByIdAndUpdate(evento.direccion._id, datos.direccion, { new: true });
		
		datos.direccion = evento.direccion._id;
	
		const eventoActualizado = await Evento.findByIdAndUpdate(mongoose.Types.ObjectId(idEvento), datos, {
			new: true
		});		

		res.json({
			ok: true,
			datosAnteriores: direccionNueva,
			eventoActualizado
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error de servidor, ni idea de lo que pasa'
		});
	}
};

const actualizarEventos = async ( req, res ) => {

	let ids = req.body.map( el => el._id)

	try {
		await Evento.updateMany(
			{ _id: { $in: ids }},
			{ $set: { confirmar: true }}
		)
	
		res.status(200).json({
			ok: true,
			response: []
		})
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error en actualizar eventos'
		});
	}

}

const borrarEvento = (req, res = response) => {
	res.json({
		ok: true,
		msg: 'borrarEvento'
	});
};

const reservarEvento = async (req, res = response) => {
	const idEvento = req.params.id;
	const idUsuario = req.body._id;

	try {
		const evento = await Evento.findByIdAndUpdate(idEvento, { $addToSet : { reservas: [ idUsuario ] }}, { new: true });		
		
		res.status(200).json({
			ok: true,
			evento
		});

	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: error
		})
	}
}

const obtenerReservasDelUsuario = async (req, res = response) => {
	const idEvento = req.params.id;
	const idUsuario = req.params.usuario;
	// TODO: comprobar el idUsuario contra el token, para asegurar que no ha sido modificado en la url

	try {
		const reservas = await Evento.find( {_id: idEvento, reservas: idUsuario });

		res.status(200).json({
			ok: true,
			reservas
		})

	} catch(error) {
		res.status(500).json({
			ok: false,
			msg: error
		})
	}
}



module.exports = {
	getEventos,
	getEvento,
	crearEvento,
	actualizarEvento,
	borrarEvento,
	getEventosDelUsuario,
	actualizarEventos,
	reservarEvento,
	obtenerReservasDelUsuario,
	getEventosRersevados
};
