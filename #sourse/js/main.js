function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

$(document).ready(function () {
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		slidesToScroll:3,
		autoplay:true,
		autoplaySpeed:10000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		centerMode: true,
		variableWidth:true,
		responsive:[
			{
				breakpoint:768,
				settings: {
					arrows:false,
					slidesToShow:1,
				}
			

			}
		]

	});
});

$(document).ready(function(){
	$('.burger').click(function(event){
		$('.burger,.header__content').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.controller a').click(function(event){
		$('.controller a').toggleClass('active');
	});
});
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
}else{
	body.classList.add('mouse');
}