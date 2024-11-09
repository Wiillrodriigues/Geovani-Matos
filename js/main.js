(function($) {

	"use strict";
  
	// Desativa parallax em dispositivos móveis
	$(window).stellar({
	  responsive: true,
	  parallaxBackgrounds: $(window).width() > 767, // Desativa o parallax em telas pequenas
	  parallaxElements: $(window).width() > 767, // Desativa parallax nos elementos
	  horizontalScrolling: false,
	  hideDistantElements: false,
	  scrollProperty: 'scroll'
	});
  
	var fullHeight = function() {
	  $('.js-fullheight').css('height', 'auto'); // Ajuste a altura para auto
	  $(window).resize(function(){
		$('.js-fullheight').css('height', 'auto'); // Ajuste para auto também no resize
	  });
	};
	fullHeight();
  
	// Loader
	var loader = function() {
	  setTimeout(function() { 
		if($('#ftco-loader').length > 0) {
		  $('#ftco-loader').removeClass('show');
		}
	  }, 1);
	};
	loader();
  
	// Scrollax
	$.Scrollax();
  
	// Burger Menu
	var burgerMenu = function() {
	  $('body').on('click', '.js-fh5co-nav-toggle', function(event) {
		event.preventDefault();
		if ($('#ftco-nav').is(':visible')) {
		  $(this).removeClass('active');
		} else {
		  $(this).addClass('active');	
		}
	  });
	};
	burgerMenu();
  
	var onePageClick = function() {
	  $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
		event.preventDefault();
		var href = $.attr(this, 'href');
		// Remover animação e permitir rolagem normal
		window.location.hash = href;
	  });
	};
	onePageClick();
  
	var carousel = function() {
	  $('.home-slider').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 0,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav: false,
		autoplayHoverPause: false,
		items: 1,
		navText: ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
		responsive: {
		  0: { items: 1 },
		  600: { items: 1 },
		  1000: { items: 1 }
		}
	  });
	  $('.carousel-testimony').owlCarousel({
		center: true,
		loop: true,
		autoplay: true,
		autoplaySpeed: 2000,
		items: 1,
		margin: 30,
		stagePadding: 0,
		nav: false,
		navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
		responsive: {
		  0: { items: 1 },
		  600: { items: 2 },
		  1000: { items: 3 }
		}
	  });
	};
	carousel();
  
	$('nav .dropdown').hover(function(){
	  var $this = $(this);
	  $this.addClass('show');
	  $this.find('> a').attr('aria-expanded', true);
	  $this.find('.dropdown-menu').addClass('show');
	}, function(){
	  var $this = $(this);
	  $this.removeClass('show');
	  $this.find('> a').attr('aria-expanded', false);
	  $this.find('.dropdown-menu').removeClass('show');
	});
  
	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});
  
	// Scroll Window
	var scrollWindow = function() {
	  $(window).scroll(function(){
		var $w = $(this),
			st = $w.scrollTop(),
			navbar = $('.ftco_navbar'),
			sd = $('.js-scroll-wrap');
  
		if (st > 150) {
		  if (!navbar.hasClass('scrolled')) {
			navbar.addClass('scrolled');	
		  }
		}
		if (st < 150) {
		  if (navbar.hasClass('scrolled')) {
			navbar.removeClass('scrolled sleep');
		  }
		}
		if (st > 350) {
		  if (!navbar.hasClass('awake')) {
			navbar.addClass('awake');	
		  }
		  if(sd.length > 0) {
			sd.addClass('sleep');
		  }
		}
		if (st < 350) {
		  if (navbar.hasClass('awake')) {
			navbar.removeClass('awake');
			navbar.addClass('sleep');
		  }
		  if(sd.length > 0) {
			sd.removeClass('sleep');
		  }
		}
	  });
	};
	scrollWindow();
  
	var counter = function() {
	  $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function(direction) {
		if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
		  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
		  $('.number').each(function(){
			var $this = $(this),
				num = $this.data('number');
			$this.animateNumber({
			  number: num,
			  numberStep: comma_separator_number_step
			}, 7000);
		  });
		}
	  }, { offset: '95%' });
	};
	counter();
  
	var contentWayPoint = function() {
	  var i = 0;
	  $('.ftco-animate').waypoint(function(direction) {
		if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
		  i++;
		  $(this.element).addClass('item-animate');
		  setTimeout(function() {
			$('body .ftco-animate.item-animate').each(function(k){
			  var el = $(this);
			  setTimeout(function () {
				var effect = el.data('animate-effect');
				if (effect === 'fadeIn') {
				  el.addClass('fadeIn ftco-animated');
				} else if (effect === 'fadeInLeft') {
				  el.addClass('fadeInLeft ftco-animated');
				} else if (effect === 'fadeInRight') {
				  el.addClass('fadeInRight ftco-animated');
				} else {
				  el.addClass('fadeInUp ftco-animated');
				}
				el.removeClass('item-animate');
			  }, k * 50, 'easeInOutExpo');
			});
		  }, 100);
		}
	  }, { offset: '95%' });
	};
	contentWayPoint();
  
	// Magnific Popup
	$('.image-popup').magnificPopup({
	  type: 'image',
	  closeOnContentClick: true,
	  closeBtnInside: false,
	  fixedContentPos: true,
	  mainClass: 'mfp-no-margins mfp-with-zoom',
	  gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0, 1]
	  },
	  image: { verticalFit: true },
	  zoom: { enabled: true, duration: 300 }
	});
  
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
  
  })(jQuery);
  
  $(function() {
	$(".progress").each(function() {
	  var value = $(this).attr('data-value');
	  var left = $(this).find('.progress-left .progress-bar');
	  var right = $(this).find('.progress-right .progress-bar');
  
	  if (value > 0) {
		if (value <= 50) {
		  right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
		} else {
		  right.css('transform', 'rotate(180deg)');
		  left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
		}
	  }
	});
  
	function percentageToDegrees(percentage) {
	  return percentage / 100 * 360;
	}
  });
  