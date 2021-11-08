const util = require('util');
const { ConexionMysql } = require("../database/config")

const query = util.promisify(ConexionMysql.query).bind(ConexionMysql);

/**
 * realiza una consulta especifica a la base de datos
 * @param {*} nomTabla nombre de la tabla a ver
 * @param {*} id id del registro que se desea a obtener (opcional)
 */
const consultarBaseDeDatos = async( nomTabla = '', id = null )=>{
    try {
        let sql = '';
        if( id === null){
           sql = `select * from ${nomTabla}`;
        } else {
           sql = `select * from ${nomTabla} WHERE id_${nomTabla}=${id}`;
        }

        const resp = await query(sql);
        return ({
            ok : true,
            data : resp
        });
       
    } catch (error) {
        return ({
            ok : false,
            error
        })
    }
   

}

module.exports = {
    consultarBaseDeDatos,
}