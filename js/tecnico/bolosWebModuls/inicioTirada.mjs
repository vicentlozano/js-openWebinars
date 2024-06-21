export const tiradaPromise = () =>
    new Promise((resolve, reject) => {
      let numAleatorio = Math.floor(Math.random() * 10);
      let tiempoTirada = Math.random() * 1000;
      let error = "no has tirado bolos, error!";
      if (numAleatorio) {
        resolve({ numAleatorio, tiempoTirada });
      } else {
        setTimeout(() => reject({ error, tiempoTirada }), tiempoTirada);
      }
    });