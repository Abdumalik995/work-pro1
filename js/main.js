$(document).ready(function() {
	$('#bars').click(function() {
		$('.nav').slideToggle().toggleClass('open');
		console.log('ishla');
	});

	$('.nav .close').click(function() {
		('.nav').css('display','none');
		console.log('/')
	});

	$('#search').click(function() {
		$('.search').slideToggle().toggleClass('open');
		
	})
})