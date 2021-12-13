const { request, response } = require("express")
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos")

const verTareas =  async(req = request, resp = response)=>{
    try {
        const {idDet} = req.params;

        const resSql = await consultarBaseDeDatos('tareas','mantenimiento',idDet);
           
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
    verTareas
}