function obtenerEtiquetas(cadena) {
   
    return cadena.split(/[^a-zA-Z0-9]+/).filter(etiqueta => etiqueta !== "");
  }
  

  console.log(obtenerEtiquetas("eti1, eti2, eti3")); // ["eti1", "eti2", "eti3"]
  console.log(obtenerEtiquetas("eti1 eti2 eti3"));   // ["eti1", "eti2", "eti3"]
  console.log(obtenerEtiquetas("eti1:eti2:eti3"));   // ["eti1", "eti2", "eti3"]
  console.log(obtenerEtiquetas("eti1, eti2   ;  eti3")); // ["eti1", "eti2", "eti3"]
  console.log(obtenerEtiquetas("eti1.eti2  ,eti3")); // ["eti1", "eti2", "eti3"]
  