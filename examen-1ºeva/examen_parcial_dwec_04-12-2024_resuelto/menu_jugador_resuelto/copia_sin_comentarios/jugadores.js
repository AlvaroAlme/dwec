//jugadores.js



import { armasDisponibles, getArmaMaxAlcance, getArmaMaxOfensiva, getArmaMagicaMaxAlcance } from "./armas.js";                                      
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://raw.githubusercontent.com/profesorfranma/dwec2425/refs/heads/main/dialogos.js" 
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://profesorfranma.github.io/dwec2425/dialogos.js"
import { gritoDeGuerra, conjuroMagico, susurroElfico } from "./dialogos.js";

class Jugador {
    constructor() {
        this.arma = null;
    }

    desequipar() {
        this.arma = null;
    }

    equipar() {
        throw new Error("El método equipar() debe ser implementado por la subclase");
    }
}

class Barbaro extends Jugador {
    constructor() {
        super();
    }

    equipar() {
        this.arma = getArmaMaxOfensiva(armasDisponibles);
        return gritoDeGuerra(this.arma);
    }
}

class Elfo extends Jugador {
    constructor() {
        super();
    }

    equipar() {
        this.arma = getArmaMaxAlcance(armasDisponibles);
        return susurroElfico(this.arma);
    }
}

class Mago extends Jugador {
    constructor() {
        super();
    }

    equipar() {
        this.arma = getArmaMagicaMaxAlcance(armasDisponibles);
        return conjuroMagico(this.arma);
    }
}

export { Jugador, Barbaro, Elfo, Mago };