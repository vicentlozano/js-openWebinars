/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
function fibonacci(){
    let cero = 0;
    let uno = 1;
    let aux = uno;
    console.log(`este es el numero 1: ${cero}`);
    console.log(`este es el numero 2: ${uno}`);
    for(i = 1;i<49;i++){
        console.log(`este es el numero ${i + 2} : ${cero + uno}`);
        uno = cero + uno;
        cero = aux;
        aux= uno;
        
    }
}
fibonacci();