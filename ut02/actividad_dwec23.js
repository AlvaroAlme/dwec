function calcularMedia(numeros) {
    
    if (numeros.length === 0) return 0;

    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    
    return suma / numeros.length;
}