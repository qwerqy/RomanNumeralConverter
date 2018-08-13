let convertToRoman = function(){
  askNum = prompt("Enter number:" + "")
  // askNum = parseInt(x)
  

  if(isNaN(askNum) == false){
    let decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    let romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let romanized = '';

    for (index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= askNum) {
        romanized += romanNumeral[index];
        askNum -= decimalValue[index]
      }
    }
  
  return romanized;

  document.write(askNum)
  }
  else {
    alert('Please enter a number, not gibberish!')
    return false
  }
}

convertToRoman()

//https://repl.it/@qwerqy/Number-to-Roman-Numerals-Converter
