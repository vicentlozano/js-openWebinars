let town= "Centro";
let year = 2023;
town = "sur";
let numero = 123;
const manolo = "Manolo";

//Esta constante es inmutable, si intentamos cambiar el valor no nos lo permitira.
// manolo = "Pedro" --> error

//var esta deprecado, no se recomienda utilizar.

console.log(year, town);



// castings "conversion"
town = Boolean(town);

year = year.toString();
numero = String(numero);

console.log(year);
console.log(town, numero);

numero = Number(numero);
console.log(numero);
