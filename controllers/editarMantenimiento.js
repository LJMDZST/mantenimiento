const {request, response} = require('express');
const { actualizarBaseDeDatos } = require('../helpers/actualizarBaseDeDatos');

const editarMantenimiento = async(req = request, res = response)=>{
    const {idDetalle, datos} = req.body;
    
    try {
        const modReg = 
        `id_equipo = ${datos.id_equipo},
        id_usuario = ${datos.id_usuario},
        id_tecnico = ${datos.id_tecnico},
        fecIni = '${datos.fecIni}',
        fecFin = '${datos.fecFin}',
        id_estado = ${datos.id_estado}
        WHERE id_mantenimiento = ${idDetalle}`;
    
        const resp = await actualizarBaseDeDatos('mantenimiento','',modReg );
    
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
    editarMantenimiento
}