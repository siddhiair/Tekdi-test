jQuery(document).ready(function($){
	$(".slider-show-2").slick({
		dots: false,
		arrows:true,
		infinite: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
	
});