//Javascript

$(document).ready(function () {

    //call to jQuery ready function
    //make sure html and css are loaded
    console.log('ready');


    //    //default hide name
    //$( ".show-name" ).hide();

    //    hide name on scroll
    //    $(window).scroll(function() {
    //
    //    if ($(this).scrollTop()>0)
    //     {
    //        $('.name').css(opacity: 1);
    //     }
    //    else
    //     {
    //      $('.name').css(opacity: 0);
    //     }
    // });

    //    $(window).scroll(function(){
    //    $(".name").css("opacity", 1 + $(window).scrollTop() / 350);
    //  });

    // hide show name... kinda works    
    //    $(window).scroll(function() {
    //  if ($(this).scrollTop()> 0) {
    //    $('.show-name').fadeIn();
    //   } else {
    //    $('.show-name').fadeOut();
    //   }
    //});

//    /* Every time the window is scrolled ... */
//    $(window).scroll(function () {
//
//        /* Check the location of each desired element */
//        $('.hideme').each(function (i) {
//
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//            /* If the object is completely visible in the window, fade it in */
//            if (bottom_of_window > bottom_of_object) {
//
//                $(this).animate({
//                    'opacity': '1'
//                }, 500);
//
//            }
//
//        });
//
//    });

//GOOOOOD
//    $(window).scroll( function(){
//        $('.hideme').each( function(i){
//            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height();
//            if( bottom_of_window > bottom_of_object ){
//                $(this).addClass('showme');
//            }
//            if( bottom_of_window < bottom_of_object ){
//                $(this).removeClass('showme');
//            }
//        });
//    });
    

    $(document).scroll( function(){
       
            var y=$(this).scrollTop();
            if(y > 308){
                $('.hideme').fadeIn();
            }else{
                $('.hideme').fadeOut();
            }
                
            });
    

    
    
})