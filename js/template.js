//Javascript

$(document).ready(function () {

    //call to jQuery ready function
    //make sure html and css are loaded
    console.log('ready');




    $(document).scroll(function () {

        var y = $(this).scrollTop();
        if (y > 199) {
            $('.hideme').fadeIn();
        } else {
            $('.hideme').fadeOut();
        }

    });



  

//        var offset = 250;
//
//        var duration = 300;
//
//        $(window).scroll(function () {
//            if ($(this).scrollTop() > offset) {
//                $('.back-to-top').fadeIn(duration);
//            } else {
//                $('.back-to-top').fadeOut(duration);
//            }
//        });
//    &nbsp;
//    $('.back-to-top').click(function (event) {
//        event.preventDefault();
//        $('html, body').animate({scrollTop: 0}, duration);
//        return false;
//    })

  
//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
//    //Display text when hover over arrow
//    $('.back-to-top').hover(function(){
//		$('html, body').animate({scrollTop : 0},800);
//		return false;
//	});

    $( '.icon-box-toggle' ).bind( 'click', function(e) {
		$( this ).toggleClass( 'active' );
		e.preventDefault();

});
    
    
    
    //slide out menu nav

  var h = $(".icon-nav"),
      c = $(".slide-content");
  
  h.on("click",function(){
  h.toggleClass("open");
 
 if(h.hasClass("open")) {
     c.animate({ left: 0 }, 300);
     $(".slide-content").css("box-shadow","200px 1px 5px rgba(0,0,0,0.5)");
    }else {
        c.animate({ left: '-100%' }, 300);
        $(".slide-content").css("box-shadow","0px 0px 0px rgba(0,0,0,0)")
    };
    
  });

  
// owl carousel
//set up carousel , To enable use autoHeight: true. At the moment works only with 1 item on screen. The plan is to calculate all visible items and change height according to heighest item.
    
  $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
});
  



})