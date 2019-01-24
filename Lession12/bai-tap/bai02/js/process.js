$(function() {
	var element = document.getElementById('myP');

	$('#deFault').click(function() {
		document.getElementById('myP').style.fontSize = "100%";
	});

	$('#fsUp').click(function() {
		var property = window.getComputedStyle(element, null).getPropertyValue("font-size");
		var x = parseInt(property);
		$('#myP').css('font-size' , x * 1.4);
	});

	$('#fsDown').click(function() {
		var property = window.getComputedStyle(element, null).getPropertyValue("font-size");
		var x = parseInt(property);
		$('#myP').css('font-size' , x * 0.6);
	});
});
