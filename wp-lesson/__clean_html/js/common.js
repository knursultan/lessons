$(document).ready(function() {
    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };

    heightDetect();

    $(window).resize(function() {
        heightDetect();
    });

    $(".toogle_menu, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".toogle_menu").click(function() {
    	if ($(".top_menu").is(":visible")){
	    	$(".top_menu").fadeOut(600);
    	} else {
	    	$(".top_menu").fadeIn(600);
    	}
    });
});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
