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
    console.log(modReg);
    try {
        let sql = '';

        if(nuevoReg !== '' && modReg === ''){
            sql = `insert into ${nomTabla} values ${nuevoReg}`; 
        } else {

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

/**
 * Actualiza la tabla insertando o actualizando una lista de registros.
 * @param {*} nomTabla nombre de la tabla 
 * @param {*} nuevosReg lista de nuevos registros
 * @param {*} modsReg lista de registros a modificar con sus ids
 */
const actualizarBaseDeDatosFull = async( nomTabla = '', nuevosReg = [], modsReg = [] )=>{
  
    try {
        let sql = '';
    
        nuevosReg.forEach( reg => {
            sql += `insert into ${nomTabla} values ${reg};`; 
        });
        
    
        modsReg.forEach(reg => {
            sql += `update ${nomTabla} set ${reg};`;
        })
           
            
      
        console.log(sql);

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
    actualizarBaseDeDatos,
    actualizarBaseDeDatosFull
}