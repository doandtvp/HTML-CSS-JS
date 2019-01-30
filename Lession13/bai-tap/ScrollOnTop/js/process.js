$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('button').fadeIn();
		} else {
			$('button').fadeOut();
		};
	});

	$('button').on("click" , function() {
		$(window).scrollTop(0);
	});
});
