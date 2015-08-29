jQuery(document).ready(function ($) {

	var options = {
		$FillMode: 2,
		$AutoPlay: true,
		$AutoPlayInterval: 4000,
		$ArrowKeyNavigation: true,
		$SlideDuration: 800,

		$BulletNavigatorOptions: {
		$Class: $JssorBulletNavigator$,
		$ChanceToShow: 2,
		$AutoCenter: 1
		},

		$ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$,
		$ChanceToShow: 1,
		$AutoCenter: 2,
		}
	};

	var jssor_slider1 = new $JssorSlider$("slider1_container", options);

	function ScaleSlider() {
		var bodyWidth = document.body.clientWidth;
		if (bodyWidth) {
		jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
		} else {
		window.setTimeout(ScaleSlider, 30);
		}
	}
	
	ScaleSlider();

	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
			
});