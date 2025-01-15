function calcularMedia(...numeros) {
    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    return suma / numeros.length;
}
 
console.log(calcularMedia(2,4));
console.log(calcularMedia(1));
console.log(calcularMedia(3,5,7,14));
