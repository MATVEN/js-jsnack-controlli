//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

var userNum = parseInt(prompt('Inserisci un numero.'));
console.log(userNum);

function pariDisoari(num1) {
  var results;

  if (num1 % 2 === 0) {
    console.log(num1);
  }else {
    results = num1 + 1;
    console.log(results);
  }

}
