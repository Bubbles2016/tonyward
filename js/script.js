$(window).on("load", (function () {
    if (!$('html').is('.ie6, .ie7, .ie8')) {
        $("#site-loader").delay(1000).fadeOut("slow");
    }
    else {
        $("#site-loader").css('display', 'none');
    }
}));
    
$(document).ready(function () {
    
    $('.slider').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 1000
    });
    
    (function ($) {
        $.fn.visible = function (partial) {

            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);

    var win = $(window);

    var allMods = $(".module");

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function (event) {

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });
        /* when scrollTop is more than 580px, make main-nav fixed in position*/
        var windowWidth = $(window).width();
        if (windowWidth > 425) {
            var scrollTop = $(window).scrollTop();
            var mainSlider = $('#main-pic').outerHeight();
            if (scrollTop >= mainSlider) {
                var diff = scrollTop - mainSlider;
                $('.first-part').css({ 'top': -diff });
                $(".middle-nav").find("img").css('visibility', 'visible');
            } else {
                if ($('.first-part').css('top') < 0) $('.first-part').css({ 'top': scollTop - mainSlider }); else $('.first-part').css('top', 0);
                $(".middle-nav").find("img").css('visibility', 'hidden');
            }
            var topHeader = $('.first-part').outerHeight();
            if (scrollTop >= (mainSlider + topHeader)) {
                $('.test').addClass('fixed')
            } else {
                $('.test').removeClass('fixed');
            }
        }
        else
            $('.first-part').css('top', 0);
    });

    /* Block scroll down if mobile navigation menu is open */
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

    /* Unblock scroll down when exit sign is clicked */
    //$('#mobileNavClose').click(function () {
    //    $('html').removeClass("stop-scroll");
    //})
});
