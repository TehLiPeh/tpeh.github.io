$(document).ready(function() {
    $('#next').on('click', function() {
        var currentImg = $('#active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeAttr('id');
            nextImg.attr('id', 'active');
        }
    });


    $('#back').on('click', function() {
        var currentImg = $('#active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeAttr('id');
            prevImg.attr('id', 'active');
        }
    });
});
//sources of images
//https://pixabay.com/images/search/akita/

//https://www.youtube.com/watch?v=J2HLW4A40X8
//I did not copy and paste any code
//Signed Teh Peh, 04/22/2022 10:49PM