/*Creare due div;
uno conterrà numeri dispari di colore rosso
e l’altro conterrà numeri pari in verde.
Ad ogni click di un bottone chiedere all’API un numero,
se è dispari metterlo nel blocco dispari,
e se è pari in quello pari.*/


// Api
$(document).ready(function() {

  $('.btn').click(function () {

     // ajax call
     $.ajax({
       url: "https://flynn.boolean.careers/exercises/api/random/int",

       method: 'GET',

       success: function (data) {

         var number = data.response;

         if (data.response % 2 == 0) {

           $('.green-box').append(number + '<br>');

         }else if (data.response % 3 == 0) {

           $('.red-box').append(number + '<br>');

         }
       },

       error:function () {
         alert('Error');
       }


     })

  })

});
