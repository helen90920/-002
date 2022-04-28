
$(document).ready(function() {


$('.dropdown').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.dropdown').toggleClass('active');
    $('.dropdown-open').slideToggle();
  });
  
// 我不知道為甚麼寫不出來選單效果...



$('.gotop a').click(function(event) {
     event.preventDefault();
     $('html,body').animate({scrollTop: 0}, 700);
    });


    lightbox.option({
        'resizeDuration': 700,
        'wrapAround': true,
        'showImageNumberLabel':false,
        
       })
    

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    cubeEffect: {slideShadows: false},
    autoplay: {
        delay: 1500,
      },
    



    // If we need pagination
    // pagination: {
    // el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
   
    
});






});



//     $(document).ready(function() {

//      $('.top a').click(function(event) {
//       event.preventDefault();
//       $('html,body').animate({
//         scrollTop: 0
//       }, 1000);
//      });
    
//     });


