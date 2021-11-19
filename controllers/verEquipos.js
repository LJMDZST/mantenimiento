const { request, response } = require("express")
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos")

const verEquipos =  async(req = request, resp = response)=>{
    try {
        const resSql = await consultarBaseDeDatos('equipos','',null);
        resp.json({
            ...resSql
        }) 
       
    } catch (error) {
        resp.json({
            ok : false,
            error
        })
    }
}


module.exports = {
    verEquipos
}