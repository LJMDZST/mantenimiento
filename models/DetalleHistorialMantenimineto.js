const { Equipo } = require("./Equipo");
const { Usuario } = require("./Usuario");

class DetalleHistorialMantenimiento {

    constructor( 
        id ,
        fecIni,
        fecFin,
        tarea,
        observ,
        oEquipo = Equipo(),
        oUsuario = Usuario(),
        estado 
     ) {

        this.id = id;
        this.fecIni = fecIni;
        this.fecFin = fecFin;
        this.tarea = tarea;
        this.observ = observ;
        this.equipo = oEquipo;
        this.usuario = oUsuario;
        this.estado = estado;
    }

    verDatos(){
        return {
            ...this
        }
    }
    


}

module.exports = {
    DetalleHistorialMantenimiento
}