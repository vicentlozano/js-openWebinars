const buttonSelect = document.querySelector("#button");

let textOnInput = document.querySelector("#input");

buttonSelect.addEventListener("click", function (event) {
  if (textOnInput.value) {
    alert(textOnInput.value);
    textOnInput.value = "";
  }
});
