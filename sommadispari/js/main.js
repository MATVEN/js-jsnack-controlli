//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
//e poi creare funzione di ciò..

var number = [10,3,6,12,4,7,5,11,16,8,9];
var number2 = [11,30,6,2,4,8,5,10,16,18,7];

// funzione
var sum1 = sumDisp(number);
var sum2 = sumDisp(number2);
console.log(sum1,sum2);

function sumDisp(arrayNumber) {
  var sum = 0;

  for (var i = 0; i < arrayNumber.length; i++) {
    if (i % 2 !== 0) {
      sum = sum + arrayNumber[i];
    }
  }
  return sum;
}
