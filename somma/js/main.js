//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.


//var numero1 = parseInt(prompt('Scegli un numero'));
//var numero2 = parseInt(prompt('Scegli un numero'));
//var numero3 = parseInt(prompt('Scegli un numero'));
//var numero4 = parseInt(prompt('Scegli un numero'));
//var numero5 = parseInt(prompt('Scegli un numero'));
//var tot = numero1 + numero2 + numero3 + numero4 + numero5;
//console.log(tot);

// ciclo
var somma = 0;
for (var i = 0; i < 5; i++) {
  var numero = parseInt(prompt('Scegli un numero'));
  console.log(numero);
  somma = somma + numero;
}
console.log(somma);
