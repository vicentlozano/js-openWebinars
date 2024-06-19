// Para poner parametros por defecto y que no sean undefined si no se los pasamos como argumentos simplemente le asignamos un valor.

function getCopyright(name = "Paco", year = 2020) {
  let copyright = name + " - " + year;
  return copyright;
}

let result = getCopyright("Vicent", 2024);

console.log(result);

//Funcion anonima

let anonymiusFunction = function (name = "Paco", year = 2020) {
  let copyright = name + " - " + year;
  return copyright;
};

console.log(anonymiusFunction("Paquito", 2020));

// Callbacks

let callbackFunction = function (name = "Paco", year = 2020, formatter) {
  let copyright = formatter(name, year);
  return copyright;
};

let formatter = function (name, year) {
  return name + " | " + year;
};

console.log(callbackFunction("vicent", 2024, formatter));

// Funciones autoinviocadas

// Con argumentos

(function (name = "Paquito", year = 2024) {
  console.log(name, year);
})("vicent", 2024);

// Sin argumentos

(function () {
  console.log("Ok");
})();
