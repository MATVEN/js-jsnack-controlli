//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// creo 2 array
var elements1 = ['tavolo','gallo','sedia','giallo','iphone'];
var elements2 = ['mouse','red','rosa','cassa','pc','carbonara','t-shirt','auto','chiave'];

// funzione
function addElements(array1,array2) {
  while (array1.length < array2.length) {
    var elementsAdded = prompt('Scrivi un oggetto da inserire.' + 'Dovrai inserire: ' + (array2.length - array1.length) + 'oggetti');
    array1.push(elementsAdded);
  }

  var array = [array1, array2];
  return array;
}

console.log(addElements(elements1,elements2));
