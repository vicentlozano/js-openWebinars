// Las promesas tienen 3 estados: pending ( pendiente), fullfilled ( cumplida) y rejected ( incumplida).

// La sintaxis estructural es la siguiente:  La promesa siempre recibira como parametros  el resolve y el reject.
let anyPromise = new Promise((resolve, reject) => {
  if (random_result) {
    setTimeout(() => {
      resolve("cumplida");
    }, 1000);
  } else {
    reject("incumplida");
  }
});

// Para comprobar si la promesa se ha cumplido o on. podemos llamar al metoodo then de la promesa, ejemplo:

anyPromise.then(
  (fullfilled) => {
    console.log(fullfilled);
  },
  (rejected) => {
    console.log(rejected);
  }
);

//Podemos utilizar el metodo .then sin argumentos y lo trataremos como un error si la promesa no se ha cumplido :

anyPromise.then().catch((error) => {
  console.log(error);
});

// Con el metodo .finally podemos ejecutar codigo este la promesa cumplida o no

anyPromise.then()
.finally(() => {
    // Aqui irian nuestras acciones
});
