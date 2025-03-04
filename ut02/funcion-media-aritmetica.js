/*
Crea una función JavaScript que admita un conjunto variable de números. 
La función deberá devolver la media aritmética de los números introducidos. 
Implementa dicha función sin hacer uso de otras funciones (ya que esto se hará en la Actividad 2.10). 

*/

function calcularMedia(numeros) { //la funcion guarda un conjunto de numeros
    
    if (numeros.length === 0) return 0;

    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
    return suma / numeros.length;
}