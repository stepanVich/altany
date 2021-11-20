// IE 8 Semantic elements polyfill
document.createElement('article');
document.createElement('aside');
document.createElement('details');
document.createElement('figcaption');
document.createElement('figure');
document.createElement('footer');
document.createElement('header');
document.createElement('main');
document.createElement('mark');
document.createElement('nav');
document.createElement('section');
document.createElement('summary');
document.createElement('time');

$(document).ready(function() {

	// Setting menu activation
	$('.menu-activate').click(function() {
		$(this).find('.menu-icon').toggleClass('active');
		$('#main-menu').toggleClass('active');
	});
	
	// Setting Slider
	$("#slick-slider").slick({
		'arrows': false,
		'infinite': true,
		'autoplay': true,
		'autoplaySpeed': 4000,
		'speed': 1000,
		'dots': true,
		'pauseOnHover': false
	});
	// Setting height of slides in slider
	$(window).bind('load resize', function() {
		$('#slick-slider .img-wrapper').height($('#slick-slider').height());
	});
	
	var isIE8 = Boolean(~navigator.appVersion.indexOf("MSIE 8"));
	
	// Setting left sidebar size
	if( $('.text-container').length ) {
		$(window).bind('load resize scroll keydown keyup click mouseup mousedown', function() {
			if( isIE8 ) {
				setTimeout(setHeaderHeight, 500);
			} else {
				setHeaderHeight();
			}
		});
	};
	var setHeaderHeight = function() {
		if( $(window).width() > 1500 && $(window).height() < $('.text-container').outerHeight() ) {
			$('.header')
			.height( $('.text-container' ).outerHeight() )
			.addClass('repeat-background');
		} else {
			$('.header')
			.height( '100%' )
			.removeClass('repeat-background');
		}
	};
});
