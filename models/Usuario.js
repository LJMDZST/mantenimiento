class Usuario {
    constructor( id , nom, esTecnico ){
        this.id = id;
        this.nom = nom;
        this.esTecnico = esTecnico;
    }

    get esTecnico(){
        return this.esTecnico;
    }

    get nom(){
        return this.nom;
    }
    get id(){
        return this.id;
    }
}

module.exports = {
    Usuario
}