const { DetalleHistorialMantenimiento } = require("./DetalleHistorialMantenimineto");



class HistorialMantenimineto {
    constructor( ){
        this.vDetallesMantenimiento = Array(DetalleHistorialMantenimiento);
    }
    /**
     * 
     * @param {*} oDetalle detalle de mantenimiento a agregar (Objeto a insertar) 
     * @returns veradero o falso dependiendo si la accion se ejecuto correctamente
     */    
    agregarDetalleHistorialMantenimineto( oDetalle ){
        try {
            this.vDetallesMantenimiento.push( oDetalle );
            return true;
        } catch (error) { 
            return false;
        }
       
    }

    /**
     * 
     * @param {*} estado criterio por el cual se va a filtrar 
     *            la lista de manteniminetos 
     * @returns Devuelve una lista con los mantenimientos filtrados.
     * 
     */

    filtrarMantenimientosPorEstado( estado ){
       
        return this.vDetallesMantenimiento.map( oMantenimiento => {
            if(oMantenimiento.prototype.verDatos().estado === estado) {
                return oMantenimiento;
            };
        })
       
    }

    finalizarMantenimiento(idDetalleHistorialMantenimiento){
        return  Boolean();
    };
    
    /**  */
    verDetalleHistorialMantenimineto( id ){
        return this.vDetallesMantenimiento.find(
                oDetalle => oDetalle.id === id 
            );
    }
    

    /**
     * Devuelve la lista de mantenimientos completa.
     */
    verMantenimientos(){
        
        return this.vDetallesMantenimiento;
    }

    

}