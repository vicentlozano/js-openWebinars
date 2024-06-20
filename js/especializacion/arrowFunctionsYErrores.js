const sumar = (a, b) => a + b;

try {
  console.log(sumar(3, sumar("a" * "b")));

} catch (error) {
  return "-not found-";
}
