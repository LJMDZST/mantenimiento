
const { request, response } = require('express');
const { actualizarBaseDeDatos } = require('../helpers/actualizarBaseDeDatos');

const agregarTareas = async(req = request, res = response) => {
    
    const lTareas = req.body;


    try {
        let sqlStr = '';
        
        lTareas.forEach((tarea,i) => {
            const {
                id_tarea,
                id_tipo_tarea,
                id_mantenimiento,
                observ,
                fecha
            } = tarea;
            
            sqlStr += `(
            '${id_tarea}',
            '${id_tipo_tarea}',
            '${id_mantenimiento}',
            '${observ}',
            '${fecha}' ) ${(i<lTareas.length-1) ? ',' : '' }` ;
        });
       

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
    agregarTareas
}