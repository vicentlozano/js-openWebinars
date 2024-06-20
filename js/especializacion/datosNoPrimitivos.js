// array
let namedCollection = ["Vicent", "Pablo", "Maria", "Paula"];

console.log(namedCollection);

console.log(namedCollection[3]);

// Set

let tipose = new Set();
console.log(tipose);

let tiposeLleno = new Set([1, 7, "true", "hola", 3, 5, 3]);

// La particularidad de set es que no se puede encontrar un valor por su indice ya que no tiene indice.

console.log(tiposeLleno.has(7));
tiposeLleno.add("Marc");

//console.log(tiposeLleno);

// Map
let mapeo = new Map([
  ["name", "Vicent"], 
  ["number", 5],
  ["nombre2", "Pablo"],
]);

// Para cambiar un valor de un map de hace con set, el primer valor es la clave y el segundo es el valor.

mapeo.set("nombre", "Pepito");
console.log(mapeo.get("nombre"));

// Object
let object = {
  name: "Vicent",
  surname: "Lozano",
  edad: 30,
  ciudad: "Calpe",
};

console.log(object);

console.log(object.name);

let currentDate = new Date();
let secondCurrentDate = new Date();

console.log(currentDate);
console.log(secondCurrentDate);

// Hay que tener cuidado con Date() , ya que si lo llamamos al principio del codigo y al final, o enotras partes de la ejecucion de la aplicacion dara diferentes horas ...

/* La principal diferencia entre un map y un object son los metodos para trabajar con ellos, map puede ser mas util en algunos casos, 
pero objetc se relaciona mejor con los JSON que son muy utilizados en entorno web.
*/