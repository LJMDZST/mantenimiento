const {request, response} = require('express');
const { consultarBaseDeDatos } = require('../helpers/consultarBaseDeDatos');

const filtrarMantenimientosPorEstado = async(req = request, res = response)=>{
    const {idEstado} = req.params;

    try {
        const resp = await consultarBaseDeDatos('mantenimiento','estado',3);
        res.json({
            ...resp
        })
    } catch (error) {
        res.json({
            ok: false,
            error
        })
    }
}

module.exports = {
    filtrarMantenimientosPorEstado
}