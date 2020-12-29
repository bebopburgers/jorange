jQuery(document).ready(function ($) {

    $(".form-message-toggle").on('click', function () {
        $('.form-message').toggleClass("active");
    });


    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('.overlay-menu a').click(function () {
        $('#overlay').toggleClass('open');
        $('#toggle').toggleClass('active');
    });

    new fullpage('#fullpage', {
        licenseKey: '9A082608-195C48F3-96762F5C-AB5AF338',
        scrollOverflow: true,
        // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
        anchors: ['mainScreenSection', 'aboutUsSection', 'ourCasesSection', 'servicesSection', 'openWorksSection', 'blogSection', 'contactSection'],
        navigation: false,
        menu: '#my-nav'
    });

    var Swipes = new Swiper('.swiper-container', {
        // loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    //
    // $(".single-grid").masonry({
    //     itemSelector: ".grid-item"
    // });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if ($('#contact').hasClass('active fp-completely')) {
            console.log('11111');
        } else {
            console.log('22222');
        }
    });


});

