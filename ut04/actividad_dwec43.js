/*Crea un programa que utilice promesas para ejecutar tres temporizadores en serie: cuando finalice el primer temporizador debe comenzar el segundo
cuando finalice el segundo debe comenzar el tercero. 
Se debe mostrar un mensaje por la consola cuando finalice cada temporizador. 
Además, se debe mostrar un mensaje al finalizar, independientemente de si se produce un error en algún temporizador.*/

// Función que crea un temporizador basado en una promesa
function temporizador(ms, id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) { // Simula un éxito o error con una probabilidad del 90% de éxito
                console.log(`Temporizador ${id} finalizado tras ${ms} ms.`);
                resolve(`Temporizador ${id} completado.`);
            } else {
                reject(`Temporizador ${id} falló tras ${ms} ms.`);
            }
        }, ms);
    });
}

// Función para ejecutar los temporizadores en serie
async function ejecutarTemporizadoresEnSerie() {
    try {
        // Ejecutar el primer temporizador
        await temporizador(1000, 1);

        // Ejecutar el segundo temporizador
        await temporizador(2000, 2);

        // Ejecutar el tercer temporizador
        await temporizador(3000, 3);

        console.log('Todos los temporizadores completados exitosamente.');
    } catch (error) {
        console.error(`Error: ${error}`);
    } finally {
        console.log('Proceso finalizado (independientemente de errores).');
    }
}

// Llamar a la función
ejecutarTemporizadoresEnSerie();
