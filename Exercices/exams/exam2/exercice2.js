class Véhicule{

    constructor(marque,modéle,prix_location){

        this.marque = marque ;
        this.modéle = modéle;
        this.prix_location = prix_location;

    }

    affiche(){
        return `marque : ${this.marque} , modéle : ${this.modéle} , prix de location ${this.prix_location}`;
    }

}

class Voiture extends Véhicule {

    constructor(marque,modéle , prix_location , nbr_portes){
        super(marque,modéle,prix_location);
        this.nbr_portes = nbr_portes;

    }

    affiche(){
        return ` ${super.affiche()} , nombre de portes : ${this.nbr_portes} `
    }
    
    }


const voiture1 = new Voiture("dacia","40000","5")
console.log(voiture1.affiche())