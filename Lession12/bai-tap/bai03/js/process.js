$(function() {
	$('.tabContent').hide();
  	$('.tabs li').click(function() {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tabContent').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});
