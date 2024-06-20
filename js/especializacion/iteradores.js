// For

let enumer = [];
let enumerDos = [];

for (let i = 0; i < 5; i++) {
  enumer.push(i);
}
for (let i = 0; i < 5; i++) {
  enumerDos[i] = i;
}

console.log(enumer);
console.log(enumerDos);

//do While

let limit = 3;

do {
  limit--;
  console.log(limit);
} while (limit > 0);
console.log("Acabado el bucle");

// for in (sobretodo en objetos, ya que for of no esta permitido)

let fruits = { a: "orange", b: "grape", c: "lemon" };

let arrayFruits = ["orange", "grape", "lemon"];

for (let element in fruits) {
  //console.log(fruits[element]);
}


// for of
for (let element of arrayFruits) {
  //console.log(element);
}

let fruitsSet = new Set(["watermelon", "grape", "lemon"]);
 
for (let element of fruitsSet) {
    //console.log (element);
}

let cars = ["volvo","opel","cadilac"];
let marcaElegida = "opel";

for (let i = 0; i< cars.length; i++){
    if(cars[i] == marcaElegida) {
      console.log(cars[i]);
      break;
    }
    console.log(cars[i]);
}
for(let elem of arrayFruits) {
  if (fruitsSet.has(elem)) {
    console.log(elem);
    break;
  }
  else {continue;}
}


