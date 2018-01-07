(function ($) {
    var menuOn = false;
    $('.navbar-toggle').click(function () {
        if (menuOn) HideMenu(); else ShowMenu();
        return false;
    });
    $('#overlay').click(function () { HideMenu(); });
    $('#mobileNav a.has-sub').click(function () {
        $(this).parents('li').find('ul').slideToggle();
    });
    function ShowMenu() {
        $('#overlay').show();
        $('.first-part').addClass("decrease-zindex")
        $('#mobileNav').addClass("in");
        $(window).scrollTop(0);
        $('body').css("overflow", "hidden");
        menuOn = true;
    }

    function HideMenu() {
        $('#overlay').hide();
        $(".all").css("z-index", "0");
        $(".first-part").removeClass("decrease-zindex");
        $('#mobileNav').removeClass("in");
        $('body').css("overflow", "visible");
        menuOn = false;
    }
})(jQuery);

//$('#overlay').on("click", function () {
    //    $(this).hide();
    //    $(".all").css("z-index", "0")
    //    console.log("hello");
    //    $("#mobileNav").css("visibility", "hidden");
    //    $("#mobileNav").css("opacity", "0");
    //    $("#mobileNav").css("left", "-100%");
    //    $(".navbar-toggle").attr("aria-expanded", "false");
    //    $('html').removeClass("stop-scroll");
    //    $(".first-part").removeClass("decrease-zindex");
    //    $(".first-part").addClass("increase-zindex")
//});

//$(".navbar-toggle").click(function () {
//    $(this).attr("aria-expanded", "true");
//    $('html').addClass("stop-scroll");
//    $('.first-part').addClass("decrease-zindex")
//    $("#overlay").css("display", "block")
//    $("#mobileNav").css("left", "0%");
//    $(this).removeClass("collapsed")
//    $("#mobileNav").css("top", "-100");
//    $("#mobileNav").css("visibility", "visible");
//    $("#mobileNav").css("width", "90%");
//    $("#mobileNav").css("height", "100%");

//});
