$(document).ready(function(){
	$('#btn-open-form').click(function(e){
		e.preventDefault();
		$(this).hide();
		$('.booking-form-wrapper').slideDown(700);
	});

	// phone-mask
	$(".phone-mask").mask("+375 (99) 999-99-99");
});