$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var carouselCustomer = $('.slides').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	})
	/*$('.carousel-customer__prev').click(function() {
		carouselCustomer.trigger('prev.owl.carousel');
	})
	$('.carousel-customer__next').click(function() {
		carouselCustomer.trigger('next.owl.carousel');
	})*/

	$('.card__slides').owlCarousel({
		loop: true,
		nav: false,
		items: 1
	})

	$('.card__nav-prev').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('prev.owl.carousel');
	})
	$('.card__nav-next').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('next.owl.carousel');
	})

	$('.client').owlCarousel({
		loop: true,
		nav: false,
		items: 5
	})

});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}