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
        oUsuario = Usuario()
     ) {

        this.id = id;
        this.fecIni = fecIni;
        this.fecFin = fecFin;
        this.tarea = tarea;
        this.observ = observ;
        this.equipo = oEquipo;
        this.usuario = oUsuario;
    }

    get id(){return this.id; }
    get fecIni(){return this.fecIni; }
    get fecFin(){return this.fecFin; }
    get tarea(){return this.tarea; }
    get observ(){return this.observ; }
    get equipo(){return this.equipo; }
    get usuario(){return this.usuario; }
    


}

module.exports = {
    DetalleHistorialMantenimiento
}