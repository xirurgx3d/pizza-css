/* src/app.js */

// Styles
import 'styles/_app.scss';

$(function() {
  $( ".catalog__item" ).hover(
    function() {

      
      const texthid = $( this ).find( ".catalog__text--italic" )
      var text = $(texthid).text();
      
      
      if(text.length > 75){
        $( this ).find( ".catalog__about__top" ).css("top","-40px")
        $( this ).find( ".catalog__text--italic" ).css("overflow","visible")
      }
      
    }, function() {
      $( this ).find( ".catalog__about__top" ).css("top","0")
      $( this ).find( ".catalog__text--italic" ).css("overflow","hidden")
    }
  );


  require('scripts/demo');
})

var burgerButton = document.querySelector('.burger-menu'),     
            blockBody = document.querySelector('.page'),     
            burgerMenu = document.querySelector('.nav__header--mobil');  

        burgerButton && burgerButton.addEventListener('click', function(event) {
            event.stopPropagation();
            if(burgerButton.classList.contains('active')) {
                burgerButton.classList.remove('active');
                burgerMenu.classList.remove('active');
                blockBody.style.overflow = 'auto';
            } else {
                burgerButton.classList.add('active');
                burgerMenu.classList.add('active');
                blockBody.style.overflow = 'hidden';
            }
        });



