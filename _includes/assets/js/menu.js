
$(document).ready(function () {
  
    window.breakpoints = [];
    window.breakpoints['mobile'] = 1024;
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
