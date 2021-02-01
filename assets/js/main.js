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
});