/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function anagrama(nombre1, nombre2) {
  if (nombre1.length !== nombre1.length) {
    return false;
  }

  for (i = 0; nombre1.length; i++) {
    if (nombre2.includes(nombre1[i])) {
      
    }
    else {return false;}
  }
  return true;
}
console.log(anagrama("amar", "rama"));
