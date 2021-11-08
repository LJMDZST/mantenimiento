const util = require('util');
const { ConexionMysql } = require("../database/config");
const query = util.promisify(ConexionMysql.query).bind(ConexionMysql);

/**
 * Actualiza la tabla agregando un nuevo registro con los valores
 * correspondientes.
 * @param {*} nomTabla nombre de la tabla 
 * @param {*} nuevoReg datos del nuevo registro fomato (valor1,valor2,...,valorn)
 */

const actualizarBaseDeDatos = async( nomTabla = '', nuevoReg = '' )=>{
   
    try {
        const sql = `insert into ${nomTabla} values ${nuevoReg}`; 

        const resp = await query(sql);
        return ({
            ok : true,
            resp
        })
        
    } catch (error) {
        return ({
            ok: false,
            error
        })
    }
}

module.exports = {
    actualizarBaseDeDatos
}