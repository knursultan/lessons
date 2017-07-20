$(document).ready(function() {
	$(".popup").magnificPopup({type:'image'});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

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
});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
