/*El código que se proporciona a continuación no funciona bien. ¿Por qué? ¿Cómo podrías arreglarlo?

let temporizador = {
    cuentaAtras: () => {
       setTimeout(function () {
            console.log(`Ha terminado el temporizador de ${this.tiempo} ms.`);
        }, this.tiempo);
    }
};
temporizador.tiempo = 2000;
temporizador.cuentaAtras();
Ha terminado el temporizador de undefined ms.
Claves de resolución:

Ejecuta el código en la consola del navegador o en NodeJS:
¿Se produce el tiempo de espera?
¿Se muestra el texto correcto?
Observa cómo están definidas las funciones cuentaAtras y el callback de setTimeout.
Recuerda cómo funciona this en las funciones JavaScript*/

let temporizador = {
    cuentaAtras: function() {
        setTimeout(() => {
            console.log(`Ha terminado el temporizador de ${this.tiempo} ms.`);
        }, this.tiempo);
    }
};
temporizador.tiempo = 2000;
temporizador.cuentaAtras();
/*Ha terminado el temporizador de 2000 ms.
La función cuentaAtras es una función de flecha, por lo que this se refiere al objeto temporizador.
El callback de setTimeout también es una función de flecha, por lo que this se refiere al objeto temporizador.
En este caso, this.tiempo se refiere a la propiedad tiempo del objeto temporizador.
Por lo tanto, el tiempo de espera se produce y se muestra el texto correcto.
Por lo tanto, el código funciona correctamente.*/
