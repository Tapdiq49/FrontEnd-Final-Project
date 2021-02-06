$(document).ready(function () {
    $('body').toggleClass('loaded');
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 600);

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
        $("html, body").animate({
            scrollTop: 0
        }, 'slow');
    });

    $(".navbar-toggler").click(function () {
        $(this).next().addClass('show');
        $(".nav-overlay-panel").css('display', 'block');
    });

    $(".navbar-menus .close-button").click(function () {
        $(this).parent().removeClass('show');
        $(".nav-overlay-panel").css('display', 'none');
    });

    $('.category-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('[data-fancybox="video"]').fancybox({

        youtube: {
            autoplay: false
        },
        buttons: [
            "share",
            "fullScreen",
            "close"
        ]
    });
});