//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

// variabili
var numero1 = parseInt(prompt('Scegli un numero'));
var numero2 = parseInt(prompt('Scegli un numero'));

// condition
if(numero1>numero2){
  document.getElementById('maggiore').innerHTML = 'il numero più alto è ' + numero1;
  //console.log(numero1);
}
else if (numero2>numero1){
  document.getElementById('maggiore').innerHTML = 'il numero più alto è ' + numero2;
  //console.log(numero2);
}
else {
  document.getElementById('maggiore').innerHTML = 'Avete scelto lo stesso numero!';
  //console.log('Avete scelto lo stesso numero!');

}

// stamp
