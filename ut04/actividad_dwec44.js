/*El código que se proporciona a continuación no funciona bien. ¿Por qué? ¿Cómo podrías arreglarlo?

function temporizador(tiempo) {
    return new Promise(function (resolver, rechazar) {
        setTimeout(function () {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}
let resultado = temporizador(3000);

console.log(`El valor que devuelve el temporizador es: ${resultado}.`);
El valor que devuelve el temporizador es: [object Promise].
Claves de resolución:

Ejecuta el programa en NodeJS o en la consola del navegador. Observa qué aparece por pantalla.
Analiza el código y observa qué valor devuelve la función temporizador.*/

function temporizador(tiempo) {
    return new Promise(function (resolver, rechazar) {
        setTimeout(function () {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

async function ejecutarTemporizador() {
    let resultado = await temporizador(3000);
    console.log(`El valor que devuelve el temporizador es: ${resultado}.`);
}

ejecutarTemporizador();
/*El valor que devuelve el temporizador es: Temporizador de 3000 ms terminado.
La función temporizador devuelve una promesa, por lo que el valor que devuelve es una promesa.
Para obtener el valor de la promesa, se debe utilizar await o then.
En este caso, se utiliza await para obtener el valor de la promesa y mostrarlo por pantalla.*/

