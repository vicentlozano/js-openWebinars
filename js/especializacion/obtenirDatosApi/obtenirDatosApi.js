const buttonGo = document.querySelector(".request");
const http = new XMLHttpRequest();
buttonGo.addEventListener("click", (EVENT) => {
  const required = requestUrl();
  insertOuputResponse(required);
});

function requestUrl() {
  const url = "https://yesno.wtf/api";
  http.open("GET", url);

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("peticion realizada");
    }
  };
  http.send();
}

function insertOuputResponse(response) {
  let decodeJson = JSON.parse(response);
  let container = document.querySelector(".activity");
  container.src =
    "https://yesno.wtf/assets/no/6-4bf0a784c173f70a0cab96efd9ff80c9.gif";
}
