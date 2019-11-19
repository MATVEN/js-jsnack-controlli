/*Chiedere all’API 10 nomi da inserire in un array di invitati.
Una volta generata la lista chiedere all’utente di dire il proprio nome.
Se è uno degli invitati ritornare un messaggio di benvenuto,
altrimenti di accesso negato.*/

// Api
$(document).ready(function() {

    var listInvited = [];
    var i = 0;

    for (var i; i < 10; i++) {

     // ajax call
     $.ajax({
       url: 'https://flynn.boolean.careers/exercises/api/random/name',

       method: 'GET',

       success: function (data) {

         listInvited.push(data.response)

         if (listInvited.length == 10) {
           console.log(listInvited);

           var name = prompt('Insert your name');
           var found = false;
           i;

           while (i < listInvited.length && found == false) {
             if (name == listInvited[i]) found = true; ++i;
             console.log('benvenuto');
           }
         }
       },

     })

    }

});
