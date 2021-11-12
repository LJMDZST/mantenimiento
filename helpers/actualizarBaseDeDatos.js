const util = require('util');
const { ConexionMysql } = require("../database/config");
const query = util.promisify(ConexionMysql.query).bind(ConexionMysql);

/**
 * Actualiza la tabla agregando un nuevo registro con los valores
 * correspondientes.
 * @param {*} nomTabla nombre de la tabla 
 * @param {*} nuevoReg datos del nuevo registro fomato (valor1,valor2,...,valorn)
 */

const actualizarBaseDeDatos = async( nomTabla = '', nuevoReg = '', modReg = '' )=>{
   
    try {
        let sql = '';
        if(nuevoReg !== '' && modReg === ''){
            sql = `insert into ${nomTabla} values ${nuevoReg}`; 
        }else {

            sql = `update ${nomTabla} set ${modReg}`
            
        }

        const resp = await query(sql);
        return ({
            ok : true,
            data : resp
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