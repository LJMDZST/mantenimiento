const { request, response } = require("express");
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos");


const verDetalleMantenimiento = async(req = request, res = response)=>{
    const {idDet} = req.params;

    try {
        const resp = await consultarBaseDeDatos('mantenimiento','mantenimiento',idDet);
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