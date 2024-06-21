import { tiradaPromise } from "./inicioTirada.mjs";

const button1 = document.querySelector(".buttonPlayer1");
const result = await tiradaPromise;
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");

button1.addEventListener("click", () => {
  number2.textContent = result.numeroAleatorio;
});
