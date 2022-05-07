$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 2,
        //To Do
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        //To Do
        randonStart: true,
        moveSlides: 1,
        captions: true,
        pager: true,
        pagerSelector: '#id_pager',
        pagerType: 'short',
    });
});