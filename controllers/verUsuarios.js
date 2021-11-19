const { request, response } = require("express")
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos")

const verUsuarios =  async(req = request, resp = response)=>{
  
    try {
        const resSql = await consultarBaseDeDatos('usuarios');
    
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
    verUsuarios
}