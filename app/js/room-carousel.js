(function($) {
	// This is the connector function.
	// It connects one item from the navigation carousel to one item from the
	// stage carousel.
	// The default behaviour is, to connect items with the same index from both
	// carousels. This might _not_ work with circular carousels!
	var connector = function(itemNavigation, carouselStage) {
		return carouselStage.jcarousel('items').eq(itemNavigation.index());
	};

	$(function() {
		// Setup the carousels. Adjust the options for both carousels here.
		var carouselStage  = $('.room-slider__carousel_stage').jcarousel({ vertical: true });
		var carouselNavigation = $('.room-slider__carousel_navigation').jcarousel({ vertical: true });

		// We loop through the items of the navigation carousel and set it up
		// as a control for an item from the stage carousel.
		carouselNavigation.jcarousel('items').each(function() {
			var item = $(this);

			// This is where we actually connect to items.
			var target = connector(item, carouselStage);

			item
				.on('jcarouselcontrol:active', function() {
					carouselNavigation.jcarousel('scrollIntoView', this);
					item.addClass('active');
				})
				.on('jcarouselcontrol:inactive', function() {
					item.removeClass('active');
				})
				.jcarouselControl({
					target: target,
					carousel: carouselStage
				});
		});

		// Setup controls for the stage carousel
		$('.room-slider__prev_stage')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.room-slider__next_stage')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});

		// Setup controls for the navigation carousel
		$('.room-slider__prev_navigation')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '-=1'
			});

		$('.room-slider__next_navigation')
			.on('jcarouselcontrol:inactive', function() {
				$(this).addClass('inactive');
			})
			.on('jcarouselcontrol:active', function() {
				$(this).removeClass('inactive');
			})
			.jcarouselControl({
				target: '+=1'
			});
	});

})(jQuery);
