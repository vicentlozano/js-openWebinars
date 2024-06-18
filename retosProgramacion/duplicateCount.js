/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that 
occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/

function duplicateCount(text) {
  text = text.toUpperCase();
  let count = 0;
  let cadena = "";
  let array = [];
  const intro = "La cadena es: "
  for (i = 0; i < text.length; i++) {
    for (j = i + 1; j < text.length; j++) {
      if (text[i] === text[j] && !array.includes(text[i])) {
        count++;
      }
    }
    if (count > 0) {
      cadena += `${text} \n El caracter ${text[i]} aparece ${count+1} veces. \n`;
      count = 0;
      array.push(text[i]);
    }
  }
  if(cadena.lenght !== 0){ console.log(intro + cadena);}
  else{console.log("No se repite ningun caracter");}
}
duplicateCount("aaAbcdteeE");
