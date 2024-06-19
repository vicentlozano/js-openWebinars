let adress = "Avenida Diputacion, 20";

let numberString = "123";

let price = 2.33;

let active = false;

let number1 = 4568;

let sample;

let sampleNull = null;

let simpleBoolean = false;

let trueBoolean = true;

console.log(
  typeof adress,
  typeof price,
  typeof active,
  typeof sample,
  typeof sampleNull
);

let booleanAdress = Boolean(adress);

// Si el string tiene contenido el boolean va a ser true, si ons el boolean sera false.

let numberAdress = Number(adress);

// Como vemos, si hacemos un  casting de un string que contenga letras a un number nos va a salir un NaN (Not a Number).

let castString = Number(numberString);

// Por el contrario, si el string solo contienes numeros si que nos convertira el string en numeros.

let castNumberToBoolean = Boolean(number1);

//Si el numero es 0 o es null el resuultado del casteo sera un false, en caso contrario, imagenemos que sea 120 o -5, sera true.

//Otra consideracion a destacar es que si hacemos un casteo de un booleano a un number, si es false nos dara 0 y si es true nos dara 1.

console.log(
  booleanAdress,
  numberAdress,
  numberString,
  castNumberToBoolean,
  Number(simpleBoolean),
  Number(trueBoolean)
);
