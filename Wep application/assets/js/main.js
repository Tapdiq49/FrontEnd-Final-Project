$(document).ready(function(){
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 84) {
            $("header nav").addClass('header-fixed');
            $("#back2Top").fadeIn();
        } else {
            $("header nav").removeClass('header-fixed');
            $("#back2Top").fadeOut();
        }
    });
    $("#back2Top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 'slow');
    });

    $(".navbar-toggler").click(function () {
        $(this).next().addClass('show');
        $(".nav-overlay-panel").css('display', 'block');
    });

    $(".navbar-menus .close-button").click(function () {
        $(this).parent().removeClass('show');
        $(".nav-overlay-panel").css('display', 'none');
    });
});