//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var guestName = prompt("Qual'è il tuo nome?");
console.log(guestName);
var listName = ['Andrea', 'Marco', 'Mattia', 'Federico', 'Francesco', 'Alessandro'];
console.log(listName);
var found = false;

// verifica
for (var i = 0; i < listName.length; i++) {
  if (guestName == listName[i]) {
    found = true;
  }
}
if (found) {
  console.log('Congratulations!You are on the invited list.');
}
else {
  console.log('Sorry! You are not invited.');
}
