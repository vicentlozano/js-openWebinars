let hasPizza = true;

if (hasPizza == false) {
  console.log("No tengo pizza");
} else if (hasPizza == true) {
  console.log("Tengo pizza");
} else {
  console.log(hasPizza);
}

// Hay que recordar que no es lo mismo comprobar con  == o === .
// El primero compara si los contenidos son iguales y el segundo compara que sean del mismo tipo y sean iguales (igualdad estricta).

let falseBoolean = false;
let trueBoolean = true;
let undefinedBoolean;

if (falseBoolean == "false") {
  console.log("son iguales pero no en tipo");
}
if (!falseBoolean) {
  console.log(" Es falso");
}
if (undefinedBoolean) {
  console.log("no es falsy");
} else {
  console.log(" Es falsy");
}
// Ademas, el simbolo ! comprueba si es falsy o  truthy la variable.
