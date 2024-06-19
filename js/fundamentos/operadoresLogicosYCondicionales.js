let year = 2023;

if (year == "2023") {
  console.log("son iguales");
}

// esto nos devolvera que son iguales porque solo compara el contenido no el tipo.

if (year === "2023") {
  console.log("son iguales");
}

// este bloque sin embargo, al ser una comparacion estricta no nos devolvera nada al no tener el mismo tipo

if (year !== "2023") {
  console.log("no son iguales");
}

if (year > 2022) {
  console.log("es mayor");
}

if (year > "2022") {
  console.log("es mayor");
}
if (year > 2020 && year < 2040) {
  console.log("esta en el rango");
}

if (year > 2000 || year < 2050) {
  console.log(true);
}

let isBoolean = true;
if (isBoolean) {
  console.log(isBoolean);
} else if (!isBoolean) {
  console.log(isBoolean);
}
