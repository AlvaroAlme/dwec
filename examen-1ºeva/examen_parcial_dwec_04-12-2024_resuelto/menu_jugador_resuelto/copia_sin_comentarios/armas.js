// armas.js

"use strict";

const armasDisponibles = [
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
  { nombre: "Rodela", ataque: 3, defensa: 7, alcance: 1, magia: false },
];

/**
 * La función getArmasMagicas recibe como parametro de entrada armas.
 * Devuelve todas las armas que tienen propiedades mágicas.
 *
 * @param {Array} armas - Lista de armas.
 * @returns {Array} - Lista de armas mágicas.
 */

function getArmasMagicas(armas) {
  return armas.filter((arma) => arma.magia);
}

/**
 * La función getArmasOfensivas recibe como parametro de entrada armas.
 * Devuelve todas las armas ofensivas.
 * Un arma ofensiva es aquella cuyo valor de ataque es superior o igual a su valor de defensa.
 *
 * @param {Array} armas - Lista de armas.
 * @returns {Array} - Lista de armas ofensivas.
 */

function getArmasOfensivas(armas) {
  return armas.filter((arma) => arma.ataque >= arma.defensa);
}

/**
 * La función getArmaMaxAlcance recibe como parametro de entrada armas.
 * Devuelve el arma con el mayor valor de alcance dentro de la lista.
 *
 * @param {Array} armas - Lista de armas.
 * @returns {Object} - El arma con el mayor alcance.
 */

function getArmaMaxAlcance(armas) {
  return armas.reduce((maxArma, arma) => (arma.alcance > maxArma.alcance ? arma : maxArma));
}

/**
 * La función getArmaMaxOfensiva recibe como parametro de entrada armas.
 * Devuelve el arma ofensiva con la mayor diferencia entre ataque y defensa.
 *
 * @param {Array} armas - Lista de armas.
 * @returns {Object} - El arma con la mayor ofensividad.
 */

function getArmaMaxOfensiva(armas) {
  return getArmasOfensivas(armas).reduce((maxArma, arma) =>
    ((arma.ataque - arma.defensa) > (maxArma.ataque - maxArma.defensa) ? arma : maxArma)
  );
}

/**
 * La función getArmaMagicaMaxAlcance recibe como parametro de entrada armas.
 * Devuelve el arma mágica con el mayor valor de alcance dentro de la lista.
 *
 * @param {Array} armas - Lista de armas.
 * @returns {Object} - El arma mágica con el mayor alcance.
 */

function getArmaMagicaMaxAlcance(armas) {
  return getArmaMaxAlcance(getArmasMagicas(armas));
}

export {
  armasDisponibles,
  getArmasMagicas,
  getArmasOfensivas,
  getArmaMaxAlcance,
  getArmaMagicaMaxAlcance,
  getArmaMaxOfensiva,
};
