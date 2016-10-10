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


})