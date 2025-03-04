/*
function sumar(a, b) {
      return a + b;
}

function restar(a, b) {
      console.log("Restando:");
      return a - b;
}
se podrían expresar como funciones flecha de la siguiente manera:

// El cuerpo de la función solo tiene una línea. Se pueden
// omitir las llaves y el 'return'
let sumar = (a, b) => a + b;

// El cuerpo de la función tiene varias líneas. Se deben
// incluir las llaves y el 'return'

let restar = (a, b) => {
     console.log("Restando");
     return a - b;
*/

//Transofmrar las funciones en funciones flecha simplificadas.
1.
function funcion1(a, b) {
    return (a + b) / 2;
}

let funcion1 = (a, b) => a + b / 2;

2.
function funcion2(a) {
    let b = 5;
    return a + b;
}

let funcion2 = (a) => {

    let b = 5;
    return a + b;
}


3.
function funcion3(a, b) {
    let c = 10;
    return a + b + c;
}

let funcion3 = ( a, b ) => {

    let c = 10;
    return a + b+ c;
    
}