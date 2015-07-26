$(function(){
	$(window).scroll(function(){
		var value = $(this).scrollTop();
		$('.text').text(value);

		$('.bg1').css('background-position','0 '+value+'px');
		if(value > 500){
			$('.bg2').css('background-position','0 '+(value-500)+'px');
		}else{
			$('.bg2').css('background-position','0 0');
		}

		if(value > 1000){
			$('.bg3').css('background-position','0 '+(value-500*2)+'px');
		}else{
			$('.bg3').css('background-position','0 0');
		}

		if(value > 1500){
			$('.bg4').css('background-position','0 '+(value-500*3)+'px');
		}else{
			$('.bg4').css('background-position','0 0');
		}
	});
});