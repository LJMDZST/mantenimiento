const { request, response } = require("express")
const { consultarBaseDeDatos } = require("../helpers/consultarBaseDeDatos")

const verTecnicos =  async(req = request, resp = response)=>{
  
    try {
        const resUsrs = await consultarBaseDeDatos('usuarios','',null);

        const resSql = await consultarBaseDeDatos('tecnicos','',null);
        
        resSql.data = resSql.data.map( tec => {
            const usr = resUsrs.data.find( usr => usr.id_usuario === tec.id_usuario );
            return {
                ...tec,
                nombre : usr.nombre
            }
        } );

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
    verTecnicos
}