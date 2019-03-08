$(function() {
	//include html file
	$(".header").load("header.html");
	$(".slide-show").load("slide-show.html");
	$(".side-bar").load("side-bar.html");
	$("#footer").load("footer.html");

	//first-slide-show
	var slideIndex = 1;
	function plusSlides(n) {
  		showSlides(slideIndex += n);
	}

	function showSlides(n) {
		var i;

		var slides = document.getElementsByClassName("mySlides");

		if (n > slides.length) {
			slideIndex = 1
		} 

		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i < slides.length; i++) {
	    	slides[i].style.display = "none"; 
		}

	  	slides[slideIndex-1].style.display = "block"; 
	}

	$('.prev').click(function() {
		plusSlides(-1);
	});

	$('.next').click(function() {
		plusSlides(1);
	});

	//second-slide-shows
	function plusSlides2(n) {
  		showSlides2(slideIndex += n);
	}

	function showSlides2(n) {
		var i;

		var slides = document.getElementsByClassName("mySecondSlides");

		if (n > slides.length) {
			slideIndex = 1
		} 

		if (n < 1) {
			slideIndex = slides.length
		}

		for (i = 0; i < slides.length; i++) {
	    	slides[i].style.display = "none"; 
		}

	  	slides[slideIndex-1].style.display = "block"; 
	}

	$('body').on('click','.prev2',function() {
		plusSlides2(-1);
	});

	$('body').on('click','.next2',function() {
		plusSlides2(1);
	});

	//tabs
	function activeTab(obj)
    {
        $('.tabs-wrapper ul li').removeClass('active');

        $(obj).addClass('active');

        var id = $(obj).find('a').attr('href');

        $('.tabs-content').hide();

        $(id).show();
    }

    $('body').on('click','.tabs-wrapper ul li',function() {
        activeTab(this);
    });

    //scroll-button
    $(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$('#scroll').fadeIn();
		} else {
			$('#scroll').fadeOut();
		};
	});

	$('#scroll').on("click" , function() {
		$(window).scrollTop(0);
	});

	//form-check-value
	function checkValue(x) {
		var regex_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		//check-name-value
		var name = $('#name').val();
		if (name === "") {
			$('#error-name').html("Bạn chưa nhập tên !!!");
		} else if (name.length > 20) {
			$('#error-name').html("Tên không được quá 20 kí tự !");
		} else {
			$('#error-name').html("");
		}

		//check-email
		var email = $('#email').val();
		if (email === "") {
			$('#error-email').html("Bạn chưa nhập email !!!");
		} else if (!regex_email.test(email)) {
			$('#error-email').html("Bạn nhập sai định dạng email");
		} else {
			$('#error-email').html("");
		}

		//check-report
		var textarea = $('#textarea').val();
		if (textarea === "") {
			$('#error-text').html("Vui lòng cho chúng tôi biết ý kiến của bạn !");
		} else {
			$('#error-text').html("");
		}
	}

	$('#send').on("click", function() {
		checkValue(this);
	});
});
