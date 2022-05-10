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