const {  response } = require("express")
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos")

const verTipoTareas =  async( req , resp = response)=>{
    try {
        const resSql = await consultarBaseDeDatos('tipo_tarea');
        
        resp.json({
            ...resSql
        }); 
       
    } catch (error) {
        console.log(error)
        resp.json({
            ok : false,
            error
        })
    }
}


module.exports = {
    verTipoTareas
}