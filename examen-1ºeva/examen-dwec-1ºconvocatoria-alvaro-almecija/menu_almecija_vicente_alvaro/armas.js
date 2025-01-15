// armas.js

armasDisponibles = [
  { nombre: "Daga", ataque: 5, defensa: 2, alcance: 1, magia: false },
  { nombre: "Cimitarra", ataque: 12, defensa: 4, alcance: 2, magia: false },
  { nombre: "Mandoble", ataque: 15, defensa: 5, alcance: 5, magia: false },
  { nombre: "Bastón", ataque: 3, defensa: 2, alcance: 15, magia: true },
  { nombre: "Arco", ataque: 8, defensa: 1, alcance: 20, magia: false },
  { nombre: "Ballesta", ataque: 10, defensa: 3, alcance: 40, magia: false },
  { nombre: "Anillo", ataque: 4, defensa: 1, alcance: 6, magia: true },
  { nombre: "Varita", ataque: 4, defensa: 2, alcance: 12, magia: true },
  { nombre: "Bo", ataque: 6, defensa: 3, alcance: 8, magia: false },
  { nombre: "Escudo", ataque: 2, defensa: 10, alcance: 1, magia: false },
  { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false }
];
  
  /**
 * La función getArmasMagicas recibe como parametro de entrada armas.
 * Devuelve todas las armas que tienen propiedades mágicas.
 * 
 * @param {Array} armas - Lista de armas.
 * @returns {Array} - Lista de armas mágicas.
 */

  //TO DO getArmasMagicas
  let armasDisponibles = [
    { nombre: "Daga", ataque: 5, defensa: 2, alcance: 1, magia: false },
    { nombre: "Cimitarra", ataque: 12, defensa: 4, alcance: 2, magia: false },
    { nombre: "Mandoble", ataque: 15, defensa: 5, alcance: 5, magia: false },
    { nombre: "Bastón", ataque: 3, defensa: 2, alcance: 15, magia: true },
    { nombre: "Arco", ataque: 8, defensa: 1, alcance: 20, magia: false },
    { nombre: "Ballesta", ataque: 10, defensa: 3, alcance: 40, magia: false },
    { nombre: "Anillo", ataque: 4, defensa: 1, alcance: 6, magia: true },
    { nombre: "Varita", ataque: 4, defensa: 2, alcance: 12, magia: true },
    { nombre: "Bo", ataque: 6, defensa: 3, alcance: 8, magia: false },
    { nombre: "Escudo", ataque: 2, defensa: 10, alcance: 1, magia: false },
    { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false }
  ];


  let getArmasMagicas = armasDisponibles.filter(

    function(getArmasMAgicas){
      return magia == true;
    }
  );
  console.log(getArmasMagicas);
  
  /**
 * La función getArmasOfensivas recibe como parametro de entrada armas.
 * Devuelve todas las armas ofensivas.
 * Un arma ofensiva es aquella cuyo valor de ataque es superior o igual a su valor de defensa.
 * 
 * @param {Array} armas - Lista de armas.
 * @returns {Array} - Lista de armas ofensivas.
 */

  //TO DO getArmasOfensivas
  armasDisponibles = [
    { nombre: "Daga", ataque: 5, defensa: 2, alcance: 1, magia: false },
    { nombre: "Cimitarra", ataque: 12, defensa: 4, alcance: 2, magia: false },
    { nombre: "Mandoble", ataque: 15, defensa: 5, alcance: 5, magia: false },
    { nombre: "Bastón", ataque: 3, defensa: 2, alcance: 15, magia: true },
    { nombre: "Arco", ataque: 8, defensa: 1, alcance: 20, magia: false },
    { nombre: "Ballesta", ataque: 10, defensa: 3, alcance: 40, magia: false },
    { nombre: "Anillo", ataque: 4, defensa: 1, alcance: 6, magia: true },
    { nombre: "Varita", ataque: 4, defensa: 2, alcance: 12, magia: true },
    { nombre: "Bo", ataque: 6, defensa: 3, alcance: 8, magia: false },
    { nombre: "Escudo", ataque: 2, defensa: 10, alcance: 1, magia: false },
    { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false }
  ];

  let getArmasOfensivas = armasDisponibles.filter(

    function(getArmasOfensivas){
      return ataque >= defensa;
    }
  );
  console.log(getArmasOfensivas);
      
  /**
 * La función getArmaMaxAlcance recibe como parametro de entrada armas.
 * Devuelve el arma con el mayor valor de alcance dentro de la lista.
 * 
 * @param {Array} armas - Lista de armas.
 * @returns {Object} - El arma con el mayor alcance.
 */

  //TO DO getArmaMaxAlcance
  armasDisponibles = [
    { nombre: "Daga", ataque: 5, defensa: 2, alcance: 1, magia: false },
    { nombre: "Cimitarra", ataque: 12, defensa: 4, alcance: 2, magia: false },
    { nombre: "Mandoble", ataque: 15, defensa: 5, alcance: 5, magia: false },
    { nombre: "Bastón", ataque: 3, defensa: 2, alcance: 15, magia: true },
    { nombre: "Arco", ataque: 8, defensa: 1, alcance: 20, magia: false },
    { nombre: "Ballesta", ataque: 10, defensa: 3, alcance: 40, magia: false },
    { nombre: "Anillo", ataque: 4, defensa: 1, alcance: 6, magia: true },
    { nombre: "Varita", ataque: 4, defensa: 2, alcance: 12, magia: true },
    { nombre: "Bo", ataque: 6, defensa: 3, alcance: 8, magia: false },
    { nombre: "Escudo", ataque: 2, defensa: 10, alcance: 1, magia: false },
    { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false }
  ];
  let getArmaMaxAlcance

  /**
 * La función getArmaMaxOfensiva recibe como parametro de entrada armas.
 * Devuelve el arma ofensiva con la mayor diferencia entre ataque y defensa.
 * 
 * @param {Array} armas - Lista de armas.
 * @returns {Object} - El arma con la mayor ofensividad.
 */

  //TO DO getArmaMaxOfensiva
  armasDisponibles = [
    { nombre: "Daga", ataque: 5, defensa: 2, alcance: 1, magia: false },
    { nombre: "Cimitarra", ataque: 12, defensa: 4, alcance: 2, magia: false },
    { nombre: "Mandoble", ataque: 15, defensa: 5, alcance: 5, magia: false },
    { nombre: "Bastón", ataque: 3, defensa: 2, alcance: 15, magia: true },
    { nombre: "Arco", ataque: 8, defensa: 1, alcance: 20, magia: false },
    { nombre: "Ballesta", ataque: 10, defensa: 3, alcance: 40, magia: false },
    { nombre: "Anillo", ataque: 4, defensa: 1, alcance: 6, magia: true },
    { nombre: "Varita", ataque: 4, defensa: 2, alcance: 12, magia: true },
    { nombre: "Bo", ataque: 6, defensa: 3, alcance: 8, magia: false },
    { nombre: "Escudo", ataque: 2, defensa: 10, alcance: 1, magia: false },
    { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false }
  ];

  let getArmaMaxOfensiva = armasDisponibles.map(
    function(diferencia){
      return armasDisponibles.ataque - armasDisponibles.defensa;
    }
  );

  
