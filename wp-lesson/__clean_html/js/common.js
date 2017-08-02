$(document).ready(function() {

    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function(){
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });


    $(".popup").magnificPopup({type:'image'});
    $(".popup_content").magnificPopup({type:'inline'});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutDown");
	$(".animation_3").animated("fadeInRight", "fadeOutDown");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
     };

    heightDetect();

    $(window).resize(function() {
        heightDetect();
    });

    $(".toogle_menu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".toogle_menu").click(function() {
    	if ($(".top_menu").is(":visible")){
	    	$(".top_menu").fadeOut(600);
	    	$(".top_menu li a").removeClass("fadeInUp animated");
    	} else {
	    	$(".top_menu").fadeIn(600);
	    	$(".top_menu li a").addClass("fadeInUp animated");
    	}
    });

    $(".top_menu ul a").click(function(){
    	$(".top_menu").fadeOut(600);
        $(".sandwich").toggleClass("active");
    }).append("<span>");

    $(".top_menu ul a").mPageScroll2id();
});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
