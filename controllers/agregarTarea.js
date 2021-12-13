
const { request, response } = require('express');
const { actualizarBaseDeDatos } = require('../helpers/actualizarBaseDeDatos');

const agregarTarea = async(req = request, res = response) => {
    
    const {
        id_tarea,
        id_tipo_tarea,
        id_mantenimiento,
        fecha,
        observ
    } = req.body;


    try {
        const sqlStr = `(
        '${id_tarea}',
        '${id_mantenimiento}',
        '${id_tipo_tarea}',
        '${observ}',
        '${fecha}' )`;

        const resp = await actualizarBaseDeDatos('tareas',sqlStr);
        res.json({
           ...resp
        })       
    } catch (error) {
        res.json({
            ok : false,
            error : {...error}
        })
    }
    


    return;
}

module.exports = {
    agregarTarea
}