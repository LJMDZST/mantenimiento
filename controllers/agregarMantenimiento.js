
const { request, response } = require('express');
const { actualizarBaseDeDatos } = require('../helpers/actualizarBaseDeDatos');

const agregarMantenimiento = async(req = request, res = response) => {
    
    const {
        id_mantenimiento,
        id_equipo,
        id_usuario,
        id_tecnico,
        fecIni,
        fecFin,
        id_estado
    } = req.body;


    try {
        const sqlStr = `( '${id_mantenimiento}',
        '${id_equipo}',
        '${id_usuario}',
        '${id_tecnico}',
        '${fecIni}',
        '${fecFin}',
        '${id_estado}' )`;
        const resp = await actualizarBaseDeDatos('mantenimiento',sqlStr);
        res.json({
           ...resp
        })       
    } catch (error) {
        res.json({
            ok : false,
            error
        })
    }
    


    return;
}

module.exports = {
    agregarMantenimiento
}