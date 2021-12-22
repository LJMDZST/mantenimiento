
const { request, response } = require('express');
const { actualizarBaseDeDatosFull } = require('../helpers/actualizarBaseDeDatos');

const agregarTareas = async(req = request, res = response) => {
    
    const {nuevas, vigentes} = req.body.tareas;


    try {
        let modsReg = [];
        vigentes.forEach((tarea,i) => {
            modsReg = [
                ...modsReg, 
               `id_tipo_tarea='${tarea.id_tipo_tarea}', id_mantenimiento='${tarea.id_mantenimiento}', observ='${tarea.observ}', fecha='${tarea.fecha}' WHERE id_tarea=${tarea.id_tarea}`
            ]
            
        });
        let nuevosReg = [];
        nuevas.forEach((tarea)=>{
            nuevosReg = [
                ...nuevosReg, 
                `(0,${tarea.id_tipo_tarea},${tarea.id_mantenimiento},${tarea.observ},${tarea.fecha})` 
            ];
        })
        
         const resp = await actualizarBaseDeDatosFull('tareas',nuevosReg ,modsReg );
        
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