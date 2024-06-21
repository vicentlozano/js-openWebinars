/* Simular una tirada de 9 bolos
 * Cada tirada tiene un tiempo aleatorio (tiempo en que tarda en impactar la bola), no mas de 2 segundos.
 * Si hemos tirado 9 bolos sera un strike, si nos informar numero bolos tirados.
 * Si no hemos tirado bolos, sacar error como resultado.
 * La salida debe ser por consola
 */

const tiradaPromise = () =>
  new Promise((resolve, reject) => {
    let numAleatorio = Math.floor(Math.random() * 10);
    let tiempoTirada = Math.random() * 10000;
    let error = "no has tirado bolos, error!";
    if (numAleatorio) {
      resolve({ numAleatorio, tiempoTirada });
    } else {
      setTimeout(() => reject({ error, tiempoTirada }), tiempoTirada);
    }
  });

const asyncFunction = async () => {
  console.log("Ejecucion...");
  await tiradaPromise();
  console.log("Ejecucion finalizada...");
};
asyncFunction();
tiradaPromise().then(
  (resultado) => {
    console.log(
      resultado.numAleatorio == 9
        ? `Strike!!!`
        : `Has tirado ${resultado.numAleatorio} bolos, en un tiempo de ${resultado.tiempoTirada}`
    );
  },
  (error) => {
    console.log(error.error, error.tiempoTirada);
  }
);

// Hay que comentar que en las promesas solo podremos pasar un argumentio, es decior, que si queremos que el then devuelva dos variables tenemos que pasarlo como objeto

// Muy importante el uso de await en nuestra funcion async ... la ejecucion de la funcion async no terminara hasta despues de que la promesa se haya ejecutado!!
