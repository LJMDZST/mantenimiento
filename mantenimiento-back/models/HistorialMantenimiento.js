

class HistorialMantenimineto {
    constructor( ){
        this.vDetallesMantenimiento = Array();
    }

    verDetalleHistorialMantenimineto( id ){
        return this.vDetallesMantenimiento.find( oDetalle => oDetalle.id === id )
    }
    agregarDetalleHistorialMantenimineto( oDetalle ){
        this.vDetallesMantenimiento.push( oDetalle );
    }

    verMantenimientos(){
        return this.vDetallesMantenimiento;
    }

}