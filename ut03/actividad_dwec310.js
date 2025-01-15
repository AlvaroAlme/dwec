
const regexDNI = /^[0-9ABC][0-9]{7}[XYZ][1-5]$/i;


function validarDNI(dni) {
  return regexDNI.test(dni);
}


const ejemplosValidos = [
  "A1234567X1",
  "B9876543Y5",
  "C0000000Z3",
  "1A234567Y2", // 
];


const ejemplosNoValidos = [
  "D1234567X1",   
  "A12345678Y3",  
  "B123456Z5",    
  "C1234567Q2",   
  "A1234567X6",   
  "z1234567x1"    
];


console.log("Ejemplos Validos:");
ejemplosValidos.forEach(dni => {
  console.log(`${dni}: ${validarDNI(dni)}`);
});


console.log("Ejemplos NoValidos:");
ejemplosInvalidos.forEach(dni => {
  console.log(`${dni}: ${validarDNI(dni)}`); 
});
