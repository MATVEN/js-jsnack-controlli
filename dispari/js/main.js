//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.

var dispari = [];

// ciclo
for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('Scegli un numero'));


// condition
  if (numero % 2 != 0) {
    dispari.push(numero);
    console.log(numero);
  }
}
