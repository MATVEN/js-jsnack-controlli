//Generatore di “nomi cognomi” casuali:
//prendendo una lista di nomi e una lista di cognomi,
//Gatsby vuole generare una falsa lista di invitati.

// variable
var name['Marco', 'Giorgio', 'Franco', 'Rob', 'Max'];
var surname['Bianchi', 'Rossi', 'Verdi', 'Forte', 'Totti'];
var invitedList[];

// cicle
for (var i = 0; i < 5; i++) {
  var nameRandom = Math.floor(Math.random() * (name.length));
  var surnameRandom = Math.floor(Math.random() * (surname.length));
  var nameSurname = name[nameRandom] + '' + surname[surnameRandom];

  invitedList.push(nameSurname);
}

console.log(invitedList);
