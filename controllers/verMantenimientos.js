const { request, response } = require("express");
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos");

const verMantenimientos = async(req = request, resp = response)=>{
    try {
        const resSql = await consultarBaseDeDatos( 'mantenimiento' );
        resSql.data = resSql.data.map( mant => ({
            id_mantenimiento : mant.id_mantenimiento,
            fecIni: mant.fecIni,
            id_equipo: mant.id_equipo,
            tarea: mant.tarea,
            id_estado: mant.id_estado,
        }) )
        resp.json({
           ...resSql

        })
       
    } catch (error) {
        resp.json({
            ok : false,
            error
        })
    }
 
   
  

    return;
}

module.exports = {
    verMantenimientos
}