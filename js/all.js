$(function(){
	//alert("!");
	var navigationWidth = 400;
	
	$('.overlay').css('display', 'none' );
	//$('nav').css('right', -navigationWidth );
	//$('nav').css('width', navigationWidth );
	$('.menu-icon, .nav-close').click(function(event){
		event.stopPropagation();
		if($('nav').hasClass('active')){
			$('nav, body, .container-fluid').removeClass('active');
			//$('nav').css('right', -navigationWidth );
			//$('.main-container').css('right', 0 );
			$('.overlay').fadeOut(100); 
		} else {
			$('nav, body, .container-fluid').addClass('active');
			//$('nav').css('right', 0);
			//$('.main-container').css('right', navigationWidth );
			$('.overlay').fadeIn();
		}
	});

	$(window).click(function() {
		if(!$(event.target).closest('nav').length) {
			if($('nav').hasClass('active')){
				$('nav, body, .container-fluid').removeClass('active');
				//$('nav').css('right', -navigationWidth );
				//$('.main-container').css('right', 0 );
				$('.overlay').fadeOut(100); 
			}
		}
	});


	/**
	** Mobile Testing
	**/
	var isMobile = {
		Android: function() {
		    return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		    return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
		    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		    return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		    return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if( isMobile.any() ) {
		$('body').addClass('touch');
	} else {
		$('body').addClass('no-touch');
	};
});