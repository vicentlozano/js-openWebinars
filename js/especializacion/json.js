let jsonTipo = `{
    "text" : "vamonos de fiesta",
    "date" : "10-20-39",
    "number" : 3.4,
    "array" : [1,2,3,4],
    "object": {"palabras" : ["hola","estas"], "numbers" : [1,2,3,4]}}`;

let objectTipo = JSON.parse(jsonTipo);
console.log(objectTipo);

console.log(objectTipo.object.palabras);

// Otro ejemplo seria hacer el cambio al reves

let objectToJson = { nombre: "Vicent", edad: 30, ciudad: "calp" };
let jsonText = JSON.stringify(objectToJson);
console.log(jsonText);
