$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}

	$('select').niceSelect();

	/*$('.slides__item').each(function(){
		$('.slides-nav__dots').append('<div class="slides-nav__dot"></div>')
	});*/



	var slides = $('.slides').owlCarousel({
		loop: true,
		dotsContainer: '.slides-nav__dots',
		nav: false,
		dots: true,
		items: 1
	})
	$('.slides-nav__prev').click(function() {
		slides.trigger('prev.owl.carousel');
	})
	$('.slides-nav__next').click(function() {
		slides.trigger('next.owl.carousel');
	})

	$('.card__slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 1
	})
	$('.card__nav-prev').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('prev.owl.carousel');
	})
	$('.card__nav-next').click(function() {
		$(this).closest('.card').find('.card__slides').trigger('next.owl.carousel');
	})



	var client = $('.client').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 5
	})
	$('.client-slider__prev').click(function() {
		client.trigger('prev.owl.carousel');
	})
	$('.client-slider__next').click(function() {
		client.trigger('next.owl.carousel');
	})

	var datein = new Date();
	datein.setDate((new Date()).getDate()+1);
	$.datetimepicker.setLocale('ru');
	$('#datein').datetimepicker({
		i18n:{
			ru:{
				months:[
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
					"Пн", "Вт", "Ср", "Чт", 
					"Пт", "Сб", "Вс",
				]
			}
		},
		timepicker:false,
		format:'d.m.Y',
		value: datein
	});


	dateout = new Date();
	dateout.setDate(datein.getDate()+10);
	$('#dateout').datetimepicker({
		i18n:{
			ru:{
				months:[
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				],
				dayOfWeek:[
					"Пн", "Вт", "Ср", "Чт", 
					"Пт", "Сб", "Вс",
				]
			}
		},
		timepicker:false,
		format:'d.m.Y',
		value: dateout
	});

	var date = new Date(),
			day = date.getDay(),
			mounth = date.getMonth(),
			oldhours = hours = date.getHours(),
			oldminutes = minutes = date.getMinutes(),
			months = [
					'Январь','Февраль','Март','Апрель',
					'Май','Июнь','Июль','Август',
					'Сентябрь','Октябрь','Ноябрь','Декабрь',
				];
	if (oldhours < 10) hours = "0" + oldhours;
	if (oldminutes < 10) minutes = "0" + oldminutes;
	$("#time").text(hours + ":" + minutes);
	$("#date").text(day + ' ' +months[mounth]);

	setInterval(function () {
		var date = new Date(),
				hours = date.getHours(),
				minutes = date.getMinutes();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if( oldminutes < minutes || oldhours < hours){
			oldminutes = minutes; oldhours = hours;
			$("#time").text(hours + ":" + minutes);
		}
	}, 1000);



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