/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/
function countPositivesSumNegatives(input) {
  if (typeof input !== Array || input.length < 0) {
    return [];
  } else {
    count = 0;
    negative = 0;
    for (let elemento of input) {
      elemento > 0 ? count++ : (negative += elemento);
    }
    arrayfinal = [];
    arrayfinal.push(count);
    arrayfinal.push(negative);
    return console.log(arrayfinal);
  }
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
