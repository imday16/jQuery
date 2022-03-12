// Equivalent DOMContentLoaded
/* 
document.addEventListener('DOMContentLoaded',function(){

});
*/

$(function(){

    // jQuery est une librairie(bibliothèque) javascript
    // Slogan : write less, do more

    // jQuery permet de simplifier l'écriture de notre code JS

    // le $ symbolise jQuery
    // jQuery() équivalent  $()


 //Séléction par balise
 $('span').css('background','blue'); // css()
 $('span').css({
     'color' : 'white',
     'padding':'5px',
     'margin':'10px 0',
     'display':'block'
 });

     //Séléction par id 
     $('#masection').css('border','1px solid black');


     // Selection par classe 
     $('.avion').css('border','2px solid orange');

     /* je peux sauter des lignes et cumuler l'appel des méthodes */
     $('.avion')    
         .eq(1)
         .css('background','cyan');
     
     $('.avion:eq(2)').css('color','red');

     // La méthode on() équivalent à l'addEventListener()
     // L'écoute de l'évènement
     $('p').on('click',function(){

         $(this).css('background','lime');


     });  

     
     //let mesParagraphes = document.querySelectorAll('p');
     //for (let i=0; i < mesParagraphes.length; i++){
     //    mesParagraphes[i].addEventListener('click','function(){
     //        this.style.backgroud = 'lime';
     //  })
     //}
     



});