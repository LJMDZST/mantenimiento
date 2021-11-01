const { request, response } = require("express");
const { ConexionMysql } = require("../database/config");
const util = require('util');

const agregarMantenimiento = async(req = request, res = response) => {
   
    ConexionMysql.connect ( (err)=>{
        if(err) console.log(err);
        console.log('conectado!');
    })
    const query = util.promisfy(ConexionMysql).bind(ConexionMysql);
    

    try {
        const resp = await query('SELECT table_names FROM user_tables');
        res.json({
            ok : true,

        })       
    } catch (error) {
        res.json({
            ok : false,
            error
        })
    }
    


    return;
}

module.exports = {
    agregarMantenimiento
}