let myFruit = "watermelon";

// Switch

switch (myFruit) {
  case "melon":
    console.log("melon");
    break;
  case "watermelon":
    console.log("watermelon");
    break;
  default:
    "No es la fruta indicada";
}

// Condicional ternario

let availableFruits = new Set(["lemon", "banana", "watermelon", "orange"]);

let isAvailable = availableFruits.has("banana") ? true : false;

console.log(isAvailable);

// Operador relacional in

let myFavoriteFruit = "orange";

let myAvailableFruits = {
  lemon: "Citric",
  watermelon: "Big Fruit",
  banana: "Tropical",
  orange: "Citric",
};

let myArrayFavorite = ["apple", "lemon", "banana", "orange"];

console.log(3 in myArrayFavorite ? true : false);

console.log(myFavoriteFruit in myAvailableFruits ? true : false);

/* Como vemos el operador in se puede utilizar en varios objetos y es muy util segun que datos. 
Pero como podemos obseravar, en las arrays solo funciona para comprobar si un indice esta en el array*/
