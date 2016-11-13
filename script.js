var stickyNavOffset = $('.sticky-nav-wrapper').offset().top;

$(window).on('scroll', function () {
	var distanceScrolled = $(window).scrollTop();

	if (distanceScrolled >= stickyNavOffset){
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled')
	}

	$('nav a').click(function() {
		$('nav a').removeClass('active');
		$(this).addClass('active');
	});
});