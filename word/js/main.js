//L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola p

// variabili
var word1 = prompt('Scrivi una parola');
var word2 = prompt('Scrivi una parola');

//condition
if(word1>word2){
  //document.getElementById('maggiore').innerHTML = 'il numero più alto è ' + numero1;
  console.log(word1 + " " + word2);
}
else if (word2>word1){
  //document.getElementById('maggiore').innerHTML = 'il numero più alto è ' + numero2;
  console.log(word2 + " " + word1);
}
