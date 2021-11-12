
const { request, response } = require('express');
const { actualizarBaseDeDatos } = require('../helpers/actualizarBaseDeDatos');


const finalizarMantenimiento = async( req = request, res = response )=>{
    const {idDetalle} = req.body;
    try {
        const modReg = `id_estado = 1 WHERE id_mantenimiento=${idDetalle}`;
        const resp = await actualizarBaseDeDatos('mantenimiento', '', modReg);

        res.json({
            ...resp
        })
    } catch (error) {
        res.json({
            ok : false,
            error
        })
    }

}

module.exports = {
    finalizarMantenimiento
}