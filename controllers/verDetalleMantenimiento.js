const { request, response } = require("express");
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos");


const verDetalleMantenimiento = async(req = request, res = response)=>{
    const {idDetalle} = req.params;

    try {
        const resp = await consultarBaseDeDatos('mantenimiento','mantenimiento',idDetalle);

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
    verDetalleMantenimiento
}