jQuery(document).ready(function($){
	$(".acc-title").click(function(){
		$(".acc-title").not(this).removeClass("active");
		$(".acc-body").not($(this).next()).slideUp();
		$(this).toggleClass("active");
		$(this).next(".acc-body").slideToggle();
	});

	$(".cd-tabs a").click(function(){
		$(".cd-tabs a").not(this).removeClass("active");
		$(this).addClass("active");
		$(".cd-wrapper").hide();
		var div = $(this).data("target");
		$("#"+div).fadeIn();
	});
	$(".slider-show-2").slick({
		dots: false,
		arrows:true,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1599,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$(".slider-show-3").slick({
		dots: false,
		arrows:true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1599,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1179,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
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