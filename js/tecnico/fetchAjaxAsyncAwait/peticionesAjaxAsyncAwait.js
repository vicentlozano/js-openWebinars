const apiButton = document.querySelector(".buttonApi");
const myImage = document.querySelector(".imageResponse");

apiButton.addEventListener("click", () => {
  asyncFunction();
});

const asyncFunction = async () => {
  let response = await fetch("https://yesno.wtf/api");
  console.log(response);
  let jsonData = await response.json();
  let imageUrl = jsonData.image;
  myImage.src = imageUrl;
  myImage.style.display = "block";
};
