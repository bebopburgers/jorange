$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ["home", "about", "works", "services", "jobs", "blog", "contact"],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['H', 'A', 'W', 'S', 'J', "B", "C"]
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
});

function openLightBox(){
    const modal = $('.modal');
    $('.show-modal').on('click', function() {
        modal.fadeIn();
        $('#open-modal-btn').css( "visibility", "hidden" );
        $('.close-modal').css( "visibility", "visible" );
        $('#pp-nav').css( "visibility", "hidden" );
    });

    $('.close-modal-link').on('click', function() {
        $('#open-modal-btn').css( "visibility", "visible" );
        $('.close-modal').css( "visibility", "hidden" );
        $('#pp-nav').css( "visibility", "visible" );
        modal.fadeOut();
    })

    $('.close-modal').on('click', function() {
        $('#open-modal-btn').css( "visibility", "visible" );
        $('.close-modal').css( "visibility", "hidden" );
        $('#pp-nav').css( "visibility", "visible" );
        modal.fadeOut();
    });
}
openLightBox();

jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 3000);
    });

    $('.img-cont img').mouseenter((ev) => {
        ev.target.parentElement.parentElement.lastElementChild.style.visibility = 'visible';
        ev.target.style.opacity = '.8';
    })

    $('.img-cont img').mouseleave((ev) => {
        ev.target.parentElement.parentElement.lastElementChild.style.visibility = 'hidden';
    })

    $('.img-cont a').mouseenter((ev) => {
        ev.target.previousElementSibling.firstElementChild.style.opacity = '.8';
        ev.target.style.visibility = 'visible';
    })

    $('.img-cont img').mouseleave((ev) => {
        $('.img-cont img').css("opacity", "1");
    })

    // android

    $('.mobile-development-android img').mouseenter((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "50px");
        $('.mobile-development-android a').css("visibility", "visible");
    })

    $('.mobile-development-android p').mouseenter((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "50px");
        $('.mobile-development-android a').css("visibility", "visible");
    })

    $('.mobile-development-android a').mouseenter((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "50px");
        $('.mobile-development-android a').css("visibility", "visible");
    })

    $('.mobile-development-android img').mouseleave((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "20px");
        $('.mobile-development-android a').css("visibility", "hidden");
    })

    $('.mobile-development-android p').mouseleave((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "20px");
    })

    $('.mobile-development-android a').mouseleave((ev) => {
        $('.mobile-development-android p').css("margin-bottom", "20px");
    })

    // ios

    $('.mobile-development-ios img').mouseenter((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "50px");
        $('.mobile-development-ios a').css("visibility", "visible");
    })

    $('.mobile-development-ios p').mouseenter((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "50px");
        $('.mobile-development-ios a').css("visibility", "visible");
    })

    $('.mobile-development-ios a').mouseenter((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "50px");
        $('.mobile-development-ios a').css("visibility", "visible");
    })

    $('.mobile-development-ios img').mouseleave((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "20px");
        $('.mobile-development-ios a').css("visibility", "hidden");
    })

    $('.mobile-development-ios p').mouseleave((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "20px");
    })

    $('.mobile-development-ios a').mouseleave((ev) => {
        $('.mobile-development-ios p').css("margin-bottom", "20px");
    })

    // read-more

    $('.read-more-one').click(() => {
        $('.mobile').css("display", "none");
        $('.read-more').css("display", "block");
    });

    $('.read-more-two').click(() => {
        $('.mobile').css("display", "none");
        $('.read-more').css("display", "block");
    });

    $('.mobile-read-more-back').click(() => {
        $('.mobile').css("display", "block");
        $('.read-more').css("display", "none");
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    // jobs slider

    // const slideCountJobs = $('#slider-jobs ul li').length;
    // const slideWidthJobs = $('#slider-jobs ul li').width();
    // const slideHeightJobs = $('#slider-jobs ul li').height();
    // const sliderUlWidthJobs = slideCountJobs * slideWidthJobs;
    //
    // $('#slider-jobs').css({ width: slideWidthJobs, height: slideHeightJobs });
    //
    // $('#slider-jobs ul').css({ width: sliderUlWidthJobs, marginLeft: - slideWidthJobs });
    //
    // $('#slider-jobs ul li:last-child').prependTo('#slider-jobs ul');
    //
    // function moveLeftJobs() {
    //     $('#slider-jobs ul').animate({
    //         left: + slideWidthJobs
    //     }, 200, function () {
    //         $('#slider-jobs ul li:last-child').prependTo('#slider-jobs ul');
    //         $('#slider-jobs ul').css('left', '');
    //     });
    // };
    //
    // function moveRightJobs() {
    //     $('#slider-jobs ul').animate({
    //         left: - slideWidthJobs
    //     }, 200, function () {
    //         $('#slider-jobs ul li:first-child').appendTo('#slider-jobs ul');
    //         $('#slider-jobs ul').css('left', '');
    //     });
    // };
    //
    // $('a.control_prev-jobs').click(function () {
    //     console.log('click')
    //     moveLeftJobs();
    // });
    //
    // $('a.control_next-jobs').click(function () {
    //     moveRightJobs();
    // });

});

$(function() {
    var windowWidth = $(".window").width();
    var windowHeight = $(".window").height();
    var i = 0;
    var panelAmount = $(".sp-panel").length;

    // Give the panels a fitting H/W
    $(".sp-panel").css("width", windowWidth);
    $(".sp-panel").css("height", windowHeight);

    // Click on "Right" to move forward
    $(".right").click(function(){

        i+=1;

        if (i < 0 ){
            i = panelAmount - 1;
        }

        if (i >= panelAmount) {
            i = 0;
        }

        var pos=(i*windowWidth);
        $(".sp-panel-set").css("left", -pos + "px");
    });

    // Click on "Left" to move backward
    $(".left").click(function(){

        i-=1;

        if (i < 0 ){
            i = panelAmount - 1;
        }

        if (i >= panelAmount) {
            i = 0;
        }

        var pos=(i*windowWidth);
        $(".sp-panel-set").css("left", -pos + "px");
    });

    // Attempted Mobile Swipe Alternative

    // Swipe Forward
    $(".sp-panel-set").on("swipeleft", function(event){

        i+=1;

        if (i < 0 ){
            i = panelAmount - 1;
        }

        if (i >= panelAmount) {
            i = 0;
        }

        var pos=(i*windowWidth);
        $(".sp-panel-set").css("left", -pos + "px");
    });

    // Swipe Backward
    $(".sp-panel-set").on("swiperight", function(event){

        i-=1;

        if (i < 0 ){
            i = panelAmount - 1;
        }

        if (i >= panelAmount) {
            i = 0;
        }

        var pos=(i*windowWidth);
        $(".sp-panel-set").css("left", -pos + "px");
    });

    $('.job-description').mouseenter((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "none";
            ev.target.parentElement.lastElementChild.style.display = "block";
        }
    })

    $('.job-description').mouseleave((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "block";
            ev.target.parentElement.lastElementChild.style.display = "none";
        }
    })

    $('.job-description-link').mouseenter((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "none";
            ev.target.parentElement.lastElementChild.style.display = "block";
        }
    })

    $('.job-description-vacancy').mouseenter((ev) => {
        ev.target.parentElement.style.display = "none";
        ev.target.parentElement.parentElement.lastElementChild.style.display = "block";
    })

    $('.job-description-vacancy').mouseleave((ev) => {
        ev.target.parentElement.style.display = "block";
        ev.target.parentElement.parentElement.lastElementChild.style.display = "none";
    })

    $('.job-description-read-more').mouseenter((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "none";
            ev.target.parentElement.lastElementChild.style.display = "block";
        }
    })

    $('.job-description-link').mouseleave((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "block";
            ev.target.parentElement.lastElementChild.style.display = "none";
        }
    })

    $('.job-description-read-more').mouseleave((ev) => {
        if (ev.target.parentElement.localName === 'a') {
            ev.target.parentElement.firstElementChild.style.display = "block";
            ev.target.parentElement.lastElementChild.style.display = "none";
        }
    })

    // blog slider

    var windowWidthBlog = $(".window-blog").width();
    var windowHeightBlog = $(".window-blog").height();
    var t = 0;
    var panelAmountBlog = $(".sp-panel").length;

    // Give the panels a fitting H/W
    $(".sp-panel-blog").css("width", windowWidthBlog);
    $(".sp-panel-blog").css("height", windowHeightBlog);

    // Click on "Right" to move forward
    $(".right-blog").click(function(){

        t+=1;

        if (t < 0 ){
            t = panelAmountBlog - 1;
        }

        if (t >= panelAmountBlog) {
            t = 0;
        }

        var posBlog=(t*windowWidthBlog);
        $(".sp-panel-set-blog").css("left", -posBlog + "px");
    });

    // Click on "Left" to move backward
    $(".left-blog").click(function(){

        t-=1;

        if (t < 0 ){
            t = panelAmountBlog - 1;
        }

        if (t >= panelAmountBlog) {
            t = 0;
        }

        var posBlog=(t*windowWidthBlog);
        $(".sp-panel-set-blog").css("left", -posBlog + "px");
    });

    // Attempted Mobile Swipe Alternative

    // Swipe Forward
    $(".sp-panel-set-blog").on("swipeleft", function(event){

        t+=1;

        if (t < 0 ){
            t = panelAmountBlog - 1;
        }

        if (t >= panelAmountBlog) {
            t = 0;
        }

        var posBlog=(t*windowWidthBlog);
        $(".sp-panel-set-blog").css("left", -posBlog + "px");
    });

    // Swipe Backward
    $(".sp-panel-set-blog").on("swiperight", function(event){

        t-=1;

        if (t < 0 ){
            t = panelAmountBlog - 1;
        }

        if (t >= panelAmountBlog) {
            t = 0;
        }

        var posBlog=(t*windowWidthBlog);
        $(".sp-panel-set-blog").css("left", -posBlog + "px");
    });
});
