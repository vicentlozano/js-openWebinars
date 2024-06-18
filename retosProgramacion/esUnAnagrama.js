/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function anagrama(nombre1, nombre2) {
  if (nombre1.length === nombre2.length) {
    return false;
  }

  let arrpalabra1 = nombre1.split("").sort().join("");
  let arrpalabra2 = nombre2.split("").sort().join("");
  return arrpalabra1 === arrpalabra2;
}
console.log(anagrama("amar", "rama"));
