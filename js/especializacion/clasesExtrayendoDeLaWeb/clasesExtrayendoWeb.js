let inputHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Web de viajes</p>
    <div class="product">
      <div class="imagen">
        <img src="beach.jpg" />
      </div>
      <div class="content">
        <p class="tittle">vacaciones en la playa</p>
        <p class="desc">para las personas con pension completa</p>
        <p class="price">165&euro; por noche/persona</p>
      </div>
    </div>
    <script src="clasesExtrayendoWeb.js"></script>
  </body>
</html>`;

class Extractor {
  #value;

  constructor(html, pattern) {
    this.#value = this.#extract(html, pattern);
  }

  get value() {
    return this.#value;
  }

  #extract(html, pattern) {
    let capture = pattern.exec(html);
    return capture ? capture[1] : null;
  }
}

class Product {
  #title;
  #image;

  constructor(title, image) {
    this.#title = title;
    this.#image = image;
  }

  get title() {
    return this.#title;
  }
  get image() {
    return this.#image;
  }
}

// Regular expression to extract the image source
let imageExtractor = new Extractor(
  inputHtml,
  new RegExp(/<img\s+src="([^"]+)"\s*\/?>/)
);

// Log the extracted image URL
console.log(imageExtractor.value);