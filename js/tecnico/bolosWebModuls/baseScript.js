import { tiradaPromise, asyncFunction, endGame } from "./inicioTirada.mjs";

const button1 = document.querySelector(".buttonPlayer1");
const button2 = document.querySelector(".buttonPlayer2");
const number1 = document.querySelector(".resultPlayer1");
const number2 = document.querySelector(".resultPlayer2");
let numberThrow1 = 0;
let numberThrow2 = 0;
let throwResults1 = [];
let throwResults2 = [];

button1.addEventListener("click", async () => {
  if (
    !endGame(numberThrow1, numberThrow2, throwResults1, throwResults2) &&
    numberThrow1 < 6 &&
    numberThrow2 < 6
  ) {
    let aleatorio = await asyncFunction();
    throwResults1.push(Number(aleatorio));
    number1.textContent += aleatorio + "|";
    number1.style.display = "";
    numberThrow1++;
  } else {
    numberThrow1 = 0;
    numberThrow2 = 0;
    throwResults1 = [];
    throwResults2 = [];
    setTimeout(() => {
      number2.textContent = "";
      number1.textContent = "";
      document.querySelector(".winPlayer1").textContent = "";
      document.querySelector(".winPlayer2").textContent = "";
    }, 5000);
  }
});

button2.addEventListener("click", async () => {
  if (
    !endGame(numberThrow1, numberThrow2, throwResults1, throwResults2) &&
    numberThrow1 < 6 &&
    numberThrow2 < 6
  ) {
    let aleatorio = await asyncFunction();
    throwResults2.push(Number(aleatorio));
    number2.textContent += aleatorio + "|";
    number2.style.display = "";
    numberThrow2++;
  } else {
    numberThrow1 = 0;
    numberThrow2 = 0;
    throwResults1 = [];
    throwResults2 = [];
    setTimeout(() => {
      number2.textContent = "";
      number1.textContent = "";
      document.querySelector(".winPlayer1").textContent = "";
      document.querySelector(".winPlayer2").textContent = "";
    }, 5000);
  }
});
