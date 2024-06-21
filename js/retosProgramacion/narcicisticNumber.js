/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153*/
    function narcissistic(value) {
        // Code me to return true or false
        
        const elevado = Number(value.toString().length);
        const stringNumero = value.toString();
        let numSaliente = 0;
        for(i = 0; i < stringNumero.length; i ++){
          
         numSaliente+= Number(stringNumero[i]) ** elevado;
       
          
        }
        //value === numSaliente?  true:  false;
        if(value===numSaliente){return true;}
        else{return false;}
        
      }
      console.log(narcissistic(1100));