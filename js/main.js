$(document).ready(function() {

	$('#modal1').css('display','block');
	
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
        //dots: true
    });
})