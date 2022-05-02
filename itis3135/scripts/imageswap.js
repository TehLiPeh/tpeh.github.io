$(document).ready(function () {
    //let imageCache = [];
    //preload
    // $('#slides-img').each((index, link) => {
    //     const images = new Image();
    //     img.src = $(img).attr('src');
    //     imageCache.title = $(img).attr('alt');
    //     imageCache[index] = images;
    // });

    $('.slides-img').on('click', function () {
        var $imgs = $(this).attr('src');
        $('#big-screen').fadeOut(900, function() {
            $('#big-screen').attr('src', $imgs).fadeIn(900);
        });
        //evt.preventDefault();
    });
});

//Notes: I used the Murach's Javascript and Jquery book
//swap images - page 273
//fadeIn and fadeOut - Page 287
//I did not copy and paste any codes
//Signed Teh Peh 05/01/2022, 10:30PM