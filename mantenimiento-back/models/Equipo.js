class Equipo {
    constructor(id, nom){
        this.id = id;
        this.nom = nom;
    }

    get nom(){
        return this.nom;
    }
    get id(){
        return this.id;
    }
}

module.exports = {
    Equipo
}