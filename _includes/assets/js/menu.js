
var oldScrollTop = 0;
if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if ((scrollTop < oldScrollTop) && scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
        oldScrollTop = $(window).scrollTop();
    });
    $('#back-to-top-Trigger').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

$(document).ready(function () {
  
    window.breakpoints = [];
    window.breakpoints['mobile'] = 800;
    // window.breakpoints['tablet'] = 1234;
    // window.breakpoints['desktop'] = 1234;
    var $window = $(window),
        $html = $('html');
    var clickMobileMenuBttn = $('.mobile-menu-bttn');


    /*** Events ***/
    $('.overlay').on('click', function (e) {
        closeMobileMenu();
    });

    closeMobileMenu = function () {
        //check if menu is open
        //if true call clickMobileMenu
        if ($('.main-nav-menu').hasClass('open')) {
            toggleMobileMenu();
        }
    };

    clickMobileMenuBttn.click(function () {
        toggleMobileMenu();
    });

    toggleMobileMenu = function () {
        $('.main-nav-menu, .main-nav, .mobile-menu-bttn').toggleClass("open");
    };
});

