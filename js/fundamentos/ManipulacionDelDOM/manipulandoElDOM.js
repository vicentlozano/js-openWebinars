var buttonText = document.querySelector(".test");

buttonText.addEventListener("click", function (event) {

  //Con el stopPropagation() conseguimos que el evento no se propague hacia arriba, es decir que el evento no afectara a otros niveles superiores, como window.
  event.stopPropagation();
  alert("OJO!!! Se va a cambiar el texto del boton!");
  buttonText.textContent = "Cambio de texto";
});

document.addEventListener("contextmenu", function (event) {
  alert("El menu contextual esta intervenido");
  event.preventDefault();
});

window.addEventListener("click", function (event) {
  alert("Hemos hecho click en la ventana de la web");
});
