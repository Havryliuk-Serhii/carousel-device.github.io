/*=========================
   Slider
==========================*/
function addCarousel(){
  if(jQuery('body').width()<770){
    jQuery('.project-wrapper').addClass('carousel');
  } else{
    jQuery('.projects').removeClass('carousel');
  }
}

addCarousel();
jQuery(window).resize(addCarousel);


$(function(){
        var width = $('.carousel div').width();
        function carousel(){
                $('.carousel').delay(3000).animate({right: '+=' + width},1500, function(){
                    var first = $('.carousel div:first-child');
                    first.remove();
                    $(this).append(first);
                    $(this).css({right: '-=' + width});
                    carousel();
                });
        }
        carousel();
    });
