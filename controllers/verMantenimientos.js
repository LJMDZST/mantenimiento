const { request, response } = require("express");
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos");

const verMantenimientos = async(req = request, resp = response)=>{
    try {
        const resSql = await consultarBaseDeDatos( 'mantenimiento' );
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