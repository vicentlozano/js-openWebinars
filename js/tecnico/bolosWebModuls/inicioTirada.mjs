export const tiradaPromise = () =>
  new Promise((resolve, reject) => {
    let numAleatorio = Math.floor(Math.random() * 10);
    let tiempoTirada = Math.random() * 1000;
    let error = "no has tirado bolos, error!";
    if (numAleatorio >= 0) {
      resolve({ numAleatorio, tiempoTirada });
    } else {
      setTimeout(() => reject({ error, tiempoTirada }), tiempoTirada);
    }
  });

export const asyncFunction = async () => {
  try {
    const resultof = await tiradaPromise();
    return resultof.numAleatorio.toString();
  } catch (error) {
    console.log(error.error, error.tiempoTirada);
  }
};
export const endGame = (button1, button2, arrayP1, arrayP2) => {
  if (button1.disabled && button2.disabled) {
    // Corregido para verificar correctamente si ambos botones están deshabilitados
    let winLost1 = 0;
    let winLost2 = 0;
    for (let element of arrayP1) {
      winLost1 += element;
    }
    for (let element of arrayP2) {
      winLost2 += element;
    }
    if (winLost1 == winLost2) {
      document.querySelector(".winPlayer1").textContent = "TIE!";
      document.querySelector(".winPlayer2").textContent = "TIE!";
      return true;
    } else {
      winLost1 > winLost2
        ? (document.querySelector(".winPlayer1").textContent = "PLAYER 1 WIN!")
        : (document.querySelector(".winPlayer2").textContent = "PLAYER 2 WIN!");
      return true;
    }
  } else {
    return false;
  }
};
