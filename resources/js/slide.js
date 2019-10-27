// This is smooth scrolling for the button located in the 100vh Image.
$(document).ready(function(){

  $('.smoothScrollBtn').click(function(e){

    var linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    }, 1000);
  });

});


// This is the smooth scrolling effect for the Navigation background
$(document).ready(function(){

  $('.slide-section').click(function(e){

    var linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    }, 1000);
  });

});



// Change the Navigation bar background when scrolling on the page
// $(document).ready(function(){
//             var scroll_pos = 0;
//             $(document).scroll(function() {
//                 scroll_pos = $(this).scrollTop();
//                 if(scroll_pos > 1000) {
//                     $(".mainNav").addClass("changeColor");
//                     $(".slide-section").css('color', 'black');
//                 }   if(scroll_pos < 1000) {
//                       $(".mainNav").removeClass("changeColor");
//                       $(".slide-section").css('color', 'white');
//                   }
//             });
//         });
