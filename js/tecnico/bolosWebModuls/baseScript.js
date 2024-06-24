// Importaciones necesarias
import { tiradaPromise, asyncFunction, endGame } from "./inicioTirada.mjs";

// Selección de elementos del DOM
const button1 = document.querySelector(".buttonPlayer1");
const button2 = document.querySelector(".buttonPlayer2");
const number1 = document.querySelector(".resultPlayer1");
const number2 = document.querySelector(".resultPlayer2");
const winText1 = document.querySelector(".winPlayer1");
const winText2 = document.querySelector(".winPlayer2");

// Variables de estado del juego
let numberThrow1 = 0;
let numberThrow2 = 0;
let throwResults1 = [];
let throwResults2 = [];

// Funciones para habilitar/deshabilitar botones
const disableButtons = (button) => {
  button.disabled = true;
};
const enableButtons = (button) => {
  button.disabled = false;
};

// Manejadores de eventos para los botones
button1.addEventListener("click", async () => {
  if (
    !endGame(button1, button2, throwResults1, throwResults2) &&
    numberThrow1 < 6 &&
    numberThrow2 < 6
  ) {
    let aleatorio = await asyncFunction();
    throwResults1.push(Number(aleatorio));
    number1.textContent += aleatorio + "|";
    numberThrow1++;
    if (numberThrow1 == 5) {
      disableButtons(button1);
      if (endGame(button1, button2, throwResults1, throwResults2)) {
        rebootGame(
          button1,
          button2,
          number1,
          number2,
          winText1,
          winText2,
          () => {
            numberThrow1 = 0;
            numberThrow2 = 0;
            throwResults1 = [];
            throwResults2 = [];
          }
        );
      }
    }
  }
});

button2.addEventListener("click", async () => {
  if (
    !endGame(button1, button2, throwResults1, throwResults2) &&
    numberThrow1 < 6 &&
    numberThrow2 < 6
  ) {
    let aleatorio = await asyncFunction();
    throwResults2.push(Number(aleatorio));
    number2.textContent += aleatorio + "|";
    numberThrow2++;
    if (numberThrow2 == 5) {
      disableButtons(button2);
      if (endGame(button1, button2, throwResults1, throwResults2)) {
        rebootGame(
          button1,
          button2,
          number1,
          number2,
          winText1,
          winText2,
          () => {
            numberThrow1 = 0;
            numberThrow2 = 0;
            throwResults1 = [];
            throwResults2 = [];
          }
        );
      }
    }
  }
});

// Corrección de la función rebootGame para aceptar los elementos y variables necesarios como argumentos
export const rebootGame = (
  button1,
  button2,
  number1,
  number2,
  winText1,
  winText2,
  resetStateCallback
) => {
  setTimeout(() => {
    number1.textContent = "";
    number2.textContent = "";
    winText1.textContent = "";
    winText2.textContent = "";
    enableButtons(button1);
    enableButtons(button2);
    resetStateCallback(); // Llamada a la función de reinicio de estado
  }, 5000);
};
