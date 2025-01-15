
function Coche(marca, color) {
    this.marca = marca;
    this.color = color;

    this.arrancar = function() {
        console.log(`Arrancando un coche ${this.marca} de color ${this.color}`);
    };
}

const coche1 = new Coche("Toyota", "Rojo");
const coche2 = new Coche("Honda", "Azul");
const coche3 = new Coche("Ford", "Negro");


const coches = [coche1, coche2, coche3];

localStorage.setItem("coches", JSON.stringify(coches));

const cochesRecuperados = JSON.parse(localStorage.getItem("coches"));

const cochesFuncionales = cochesRecuperados.map(coche => new Coche(coche.marca, coche.color));


cochesFuncionales.forEach(coche => coche.arrancar());
