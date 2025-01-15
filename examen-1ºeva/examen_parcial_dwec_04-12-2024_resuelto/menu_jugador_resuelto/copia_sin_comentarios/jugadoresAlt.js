// jugadores.js

import { armasDisponibles, getArmaMaxAlcance, getArmaMaxOfensiva, getArmaMagicaMaxAlcance } from "./armas.js";                                      
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://raw.githubusercontent.com/profesorfranma/dwec2425/refs/heads/main/dialogos.js" 
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://profesorfranma.github.io/dwec2425/dialogos.js"
import { gritoDeGuerra, conjuroMagico, susurroElfico } from "./dialogos.js";

const Jugador = {
    arma: null,

    desequipar() {
        this.arma = null;
    },

    equipar() {
        throw new Error("El método equipar() debe ser implementado por la subclase");
    }
};

const Barbaro = Object.create(Jugador);

Barbaro.equipar = function() {
    this.arma = getArmaMaxOfensiva(armasDisponibles);
    return gritoDeGuerra(this.arma);
};

const Elfo = Object.create(Jugador);

Elfo.equipar = function() {
    this.arma = getArmaMaxAlcance(armasDisponibles);
    return susurroElfico(this.arma);
};

const Mago = Object.create(Jugador);

Mago.equipar = function() {
    this.arma = getArmaMagicaMaxAlcance(armasDisponibles);
    return conjuroMagico(this.arma);
};

export { Jugador, Barbaro, Elfo, Mago };
