//tratamiento de error, añadimos un try-catch para capturar el error

function procesar(mensaje){

    try{
        return mensaje.data;
    } 
    catch (error){
        console.error("Paramentro proporcionado invalido. Inserte un objeto con propiedad 'data'.");
        return -1;
    }
}