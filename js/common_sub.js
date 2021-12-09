// JavaScript Document

$(function(){
	
	// 공통 - 네비게이션
	var isActive = false;
	$('#slidenav li a').on('click',function(){
		$('#ham-menu').removeClass('active');
		$('#slide-nav').stop().animate({top:'-100%'},300);	
		isActive =!isActive;
	});		
	$('#ham-menu'/*	,'#slidenav li a'*/).on('click',function(){
		$(this).toggleClass('active');// 햄버거 버튼 효과
		if(isActive){
			//닫힘
			$('#slide-nav').stop().animate({top:'-100%'},300);						
		}else{
			//열림
			$('#slide-nav').stop().animate({top:0},300);	
		}
		isActive =!isActive;
	});	
	
	
	// 공통 - 스크롤 이미지 블러/ 텍스 parallax
	$(window).scroll(function() {
		var scTop = $(window).scrollTop(),
		opacityVal = (scTop / 150.0);
		var txtTop = $('.works-top h1').position().top;
		$('.blur').css('opacity', opacityVal);
		$('.works-top h1').css('top',50+(scTop*0.08)+'%');
	});	
	
	ScrollAni();
	function ScrollAni(){
		$('.scroll').animate({marginTop:'+10'},1000);
		$('.scroll').animate({marginTop:'-10'},1000, ScrollAni);	
	}

	
});	

