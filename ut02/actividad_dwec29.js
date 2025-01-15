let coches = [
    { id: 1, marca: "Seat", modelo: "Ibiza", precio: 10000 },
    { id: 2, marca: "Seat", modelo: "Ateca", precio: 18000 },
    { id: 3, marca: "Volkswagen", modelo: "Golf", precio: 21000 },
    { id: 4, marca: "Kia", modelo: "Niro", precio: 30000 },
];

// Obtener los coches de la marca SEAT
const cochesSeat = coches.filter(coche => coche.marca === "Seat");
console.log("Coches de la marca Seat:", cochesSeat);

//Obtener los coches que valgan menis de 25000
const cochesBaratos = coches.filter(coche => coche.precio < 25000);
console.log("Coches con precio menor que 25000:", cochesBaratos);

// El primer coche cuyo precio sea mayor de 20000
const primerCocheCaro = coches.find(coche => coche.precio > 20000);
console.log("Primer coche con precio mayor a 20000:", primerCocheCaro);

// Transforma el array en otro con los mismos campos + un campo premium
const cochesConPremium = coches.map(coche => ({
    ...coche,
    premium: coche.precio > 20000
}));
console.log("Coches con campo premium:", cochesConPremium);

// Precio medio de los coches SEAT
const cochesSeatPrecios = coches.filter(coche => coche.marca === "Seat");
const precioMedioSeat = cochesSeatPrecios.reduce((acc, coche) => acc + coche.precio, 0) / cochesSeatPrecios.length;
console.log("Precio medio de los coches de la marca Seat:", precioMedioSeat);
