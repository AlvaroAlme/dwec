/*Crea un programa basado en promesas que lance tres temporizadores con distintos tiempos en paralelo. 
A continuación, el programa debe esperar utilizando await a que finalicen los tres. 
Una vez que hayan finalizado, el programa deberá mostrar en la consola los valores que devuelvan.*/


function temporizador(tiempo) {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

// Función principal
async function ejecutarTemporizadoresParalelo() {
    // Crear los tres temporizadores con distintos tiempos
    const temporizador1 = temporizador(1000); // 1 segundo
    const temporizador2 = temporizador(2000); // 2 segundos
    const temporizador3 = temporizador(3000); // 3 segundos

    // Esperar a que todos los temporizadores finalicen
    const resultados = await Promise.all([temporizador1, temporizador2, temporizador3]);

    // Mostrar los resultados en la consola
    console.log('Resultados de los temporizadores:', resultados);
}

// Llamar a la función principal
ejecutarTemporizadoresParalelo();
