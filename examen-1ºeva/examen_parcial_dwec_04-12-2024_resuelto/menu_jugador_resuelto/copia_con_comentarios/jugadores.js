//jugadores.js

/*
 *  E2: "Abre el archivo jugadores.js y añade en él el código necesario para crear la jerarquía de objetos de la imagen. 
 *  ↓↓↓ Para ello puedes usar la técnica de Objetos enlazados con Object.create (archivo jugadoresAlt.js), o la técnica de la sintaxis class (este archivo)"
 */

//↓↓↓ E2: "...importando los objetos y métodos de armas.js."
import { armasDisponibles, getArmaMaxAlcance, getArmaMaxOfensiva, getArmaMagicaMaxAlcance } from "./armas.js";                                      
//↓↓↓ E2: "...Estos mensajes se obtienen a través de la librería externa dialogos.js que se carga de manera remota. La librería y su documentación se encuentran disponibles en https://github.com/profesorfranma/dwec2425"
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://raw.githubusercontent.com/profesorfranma/dwec2425/refs/heads/main/dialogos.js" 
//↓↓↓ E2: Alternativa a la linea anterior.
//import { gritoDeGuerra, conjuroMagico, susurroElfico } from "https://profesorfranma.github.io/dwec2425/dialogos.js"
//↓↓↓ E2: Cargando dialogos.js en local.
import { gritoDeGuerra, conjuroMagico, susurroElfico } from "./dialogos.js";

//↓↓↓ E2: Clase base Jugador
class Jugador {
    constructor() {
        this.arma = null;  //← E2: "Un Jugador no tiene un arma asignada cuando se crea."
    }

    desequipar() {  //← E2: "El método desequipar() estará implementado en la clase padre y vuelve a dejar el atributo arma en el mismo estado que el constructor."
        this.arma = null;
    }

    equipar() {                                                                        //← E2: "El método equipar() estará implementado en las clases hijas.
        throw new Error("El método equipar() debe ser implementado por la subclase");  //← E2: "La implementación de equipar() en la clase padre lanzará un error con el mensaje “El método equipar() debe ser implementado por la subclase”"
    }
}

//↓↓↓ E2: Subclase Bárbaro
class Barbaro extends Jugador {
    constructor() {
        super();
    }

    equipar() {                                            //← E2: "El método equipar() estará implementado en las clases hijas.(...) Cada implementación del método equipar() en las clase hijas realiza dos acciones:"
        this.arma = getArmaMaxOfensiva(armasDisponibles);  //← E2: "1. Asigna el arma que le corresponde a la clase hija importando los objetos y métodos de armas.js. El Bárbaro utiliza el arma más ofensiva."
        return gritoDeGuerra(this.arma);                   //← E2: "2. Devuelve un mensaje de texto personalizado en función del tipo de Jugador y el arma que porta. Estos mensajes se obtienen a través de la librería externa dialogos.js"
    }
}

//↓↓↓ E2: Subclase Elfo
class Elfo extends Jugador {
    constructor() {
        super();
    }

    equipar() {                                            //← E2: "El método equipar() estará implementado en las clases hijas.(...) Cada implementación del método equipar() en las clase hijas realiza dos acciones:"
        this.arma = getArmaMaxAlcance(armasDisponibles);   //← E2: "1. Asigna el arma que le corresponde a la clase hija importando los objetos y métodos de armas.js.(...) El Elfo utiliza el arma de mayor alcance."
        return susurroElfico(this.arma);                   //← E2: "2. Devuelve un mensaje de texto personalizado en función del tipo de Jugador y el arma que porta. Estos mensajes se obtienen a través de la librería externa dialogos.js"
    }
}

//↓↓↓ E5: Subclase Mago "Añade a la aplicación un nuevo tipo de jugador llamado Mago."
class Mago extends Jugador {
    constructor() {
        super();
    }

    equipar() {                                                 //← E5&2: "El método equipar() estará implementado en las clases hijas.(...) Cada implementación del método equipar() en las clase hijas realiza dos acciones:"
        this.arma = getArmaMagicaMaxAlcance(armasDisponibles);  //← E5: "Los magos utilizan, de entre las armas mágicas disponibles, aquella que tiene mayor alcance."
        return conjuroMagico(this.arma);                        //← E5&2: "2. Devuelve un mensaje de texto personalizado en función del tipo de Jugador y el arma que porta. Estos mensajes se obtienen a través de la librería externa dialogos.js"
    }
}

//↓↓↓ E3: "Importa correctamente los objetos de jugadores.js"
export { Jugador, Barbaro, Elfo, Mago };