const buttonSelect = document.querySelector("#button");
let textOnInput = document.querySelector("#input");
buttonSelect.addEventListener("click", function (event) {
  alert(textOnInput.value);
});
