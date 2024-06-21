const buttonGo = document.querySelector(".request");
const http = new XMLHttpRequest();
buttonGo.addEventListener("click", (EVENT) => {
  requestUrl(insertOuputResponse);
});

function requestUrl(callback) {
  const url = "https://yesno.wtf/api";
  http.open("GET", url);

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("peticion realizada");
      callback(this.responseText);
    }
  };
  http.send();
}

function insertOuputResponse(response) {
  let decodeJson = JSON.parse(response);
  let container = document.querySelector(".activity");
  container.src = decodeJson.image;
}

/* En resumen general, aqui realizamos una peticion http a una api que nos responde con un jason, el cual 
contiene una url de una imagen un boolean y un srting. Como la peticion http demora unos segundos, tenemos que hacer uso del callback 
para recibir la respuesta cuando este dispoible, entonces accedimos al valor del objeto image que ocntiene la url y lo asignamos a nuestro img del html  
*/
