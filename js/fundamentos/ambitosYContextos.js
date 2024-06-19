let name = "Vicent";

function printName() {
  console.log(name);
  let surname;
  if (name === "Vicent") {
    surname = "Lozano";
  }
  console.log(surname);
}
printName();

// Conclusion:
// Las variables declaradas desde los padres, pueden ser accedidas desde los hijos
// Las declaradas dentro de los hijos no pueden ser accedidas desde los padres.

let otherName = "Vicent";

// if (true) {
//   let text = "Un texto cualquiera";
// }
// console.log(text);

// Este seria un ejemplo de un error de referencia, dado que como no podemos accedira  la variable etxt desde el padre, el console.log no puede mostrar nada.
