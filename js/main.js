$(document).ready(function() {
    //$('#modal1').css('display','block');
    //$('.overlay').css('display', 'block');
    /*$('').click(function() {
        //$(this).parents('.modal').slideUp(200);
		$('.overlay').fadeOut(100);
        $('.modal').fadeOut(100);
    });*/
    $('#modal1 .close').click(function() {
        $(this).parents('#modal1').fadeOut();
    });
    $('#no').click(function() {
        $('#modal1').fadeOut("slow");
    });
    $('#bars').click(function() {
        $('.nav').slideToggle().toggleClass('open');
        $(this).toggleClass('crim');
        $('#modal-language').fadeOut();
        $('#language').removeClass('crim');
    });
    $('.nav .close').click(function() {
        ('.nav').css('display', 'none');
        console.log('/')
    });
    $('#search').click(function() {
        $(this).toggleClass('crim');
        $('.search').slideToggle().toggleClass('open');
    });
    $('#language').click(function() {
        $(this).toggleClass('crim');
        $('#modal-language').slideToggle().toggleClass('open');
        $('.nav').fadeOut();
        $('#bars').removeClass('crim');
    });
    $('#comments-dots').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '#comments'
    });
    $('#comments').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        asNavFor: '#comments-dots',
        focusOnSelect: true,
    });
    // $('#hero-img').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-img'
    // });
    // $('.slider-img').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '#hero-img',
    //     //dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });


    /*$('.slider-img img').click(function() {
        var myImg = $(this).attr('src');
        var myImgId = $(this).attr('id');
        $('#hero-img img').attr({'src': myImg, id: myImgId});
        console.log('heyy');
    });

    
    $('.fast button').click(function() {
        var btnId = $(this).attr('id');
        var getImg = $('#hero-img img').attr('id');
        if(btnId == 'prev') {
            var prevImg = $('#'+getImg).prev().attr('src');
            var prevImgId = $('#'+getImg).prev().attr('id');
            if(prevImg) {
                $('#hero-img img').attr({src: prevImg, id: prevImgId});
            } else {
                var firstImg = $('.slider-img img').first();
                $('#hero-img img').attr({src: firstImg.attr('src'), id: firstImg.attr('id')});
            }
        } else {
            var nextImg = $('#'+getImg).next().attr('src');
            var nextImgId = $('#'+getImg).next().attr('id');
            if(nextImg) {
                $('#hero-img img').attr({src: nextImg, id: nextImgId});
            } else {
                var lastImg = $('.slider-img img').last();
                $('#hero-img img').attr({src: lastImg.attr('src'), id: lasttImg.attr('id')});
            }
        }

    })*/
});
