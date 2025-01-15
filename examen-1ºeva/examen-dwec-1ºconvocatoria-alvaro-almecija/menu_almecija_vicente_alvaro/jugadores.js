//jugadores.js

//TO DO
//<script src="https://raw.githubusercontent.com/profesorfranma/dwec2425/refs/heads/main/dialogos.js"></script>
    import { gritoDeGuerra,susurroElfico,conjuroMagico } from "./dialogos";
    import {getArmaMaxAlcance, getArmaMaxOfensiva} from "armas.js";

export class Jugador{
    constructor(){
        this.arma = null;
    }
    equipar(){
        console.log("El método equipar() debe ser implementado por la subclase")
    }
}
export class Barbaro extends Jugador{
    constructor(armas){
        this.arma = armas;
    }
    equipar(){
        armas = getArmaMaxOfensiva;
        gritoDeGuerra(armas)
        return gritoDeGuerra;
    }

    desequipar(){
        armas = null;

    }
}

export class Elfo extends Jugador {
    constructor(armas){
        this.arma = armas;
    }
    equipar(){
        armas = getArmaMaxAlcance;
        susurroElfico(armas)
        return susurroElfico;
    }
    desequipar(){
        armas = null;

    }
}
