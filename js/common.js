
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

	// main 페이지 - 돌이미지 마우스무브 효과
	var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 30;
	function moveStoneImg() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;
		
		translateF = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
		
		$('.foreground, .background').css({
			'-webit-transform': translateF,
			'-moz-transform': translateF,
			'transform': translateF
		});
		window.requestAnimationFrame(moveStoneImg);
	}
	$(window).on('mousemove', function(e) {
		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (10 * lMouseY) / 100;
	});
	moveStoneImg();
	

	// works 페이지- 페이지 번호
	n=1;
	function showing(){
		n++; 
		if( n==3){
			n=1;
		}
		$('.num em').text(n)
	}	
	$('.fp-next').click(function(){
		showing();
	});	
	$('.fp-prev').click(function(){
		n--;
		if(n ==0){
			n=2;
		}
		$('.num em').text(n)		
	});		
	
	// works 페이지 - hover effect
	$('.proj-li').each(function(index){
		$(this).attr('data-n',index+1) 
	});	
	$('.proj-li').mouseenter(function(){	
		m=parseInt($(this).attr('data-n'))		
		if( m <= 14 ){		// 채워진 프로젝트 숫자 외엔 hover 효과 중지
			$(this).addClass('blur');
			$('.proj-li').not(this).css('opacity',0);
			$('.proj-li').addClass('bg_effect');
			$('.view-box img').attr('src','img/works' + m +'.png');
			$('.view-box img').addClass('hovereffect');
		}
	}).mouseleave(function(){
		if( m  <= 14 ){		// 채워진 프로젝트 숫자 외엔 hover 효과 중지
			$('.proj-li').css('opacity',1);
			$('.proj-li').removeClass('bg_effect');
			$(this).removeClass('blur');
			$('.view-box img').removeClass('hovereffect');
		}
	});	
	

	// about 페이지 - hover 효과
	$('.square').hover(function(){
		var squareName = $(this).attr('id');
		var m = squareName.substr(3,1);
		$('#ov_'+m).toggleClass('opac');
		$('#txt_'+m).toggleClass('opac');
	});
	
	
	// about 페이지 - hover 스크롤 효과
	hoverScroll();
	function hoverScroll(){
		$('.arrow.up').on('mouseenter', function() {
			var scrollBtnName = $(this).attr('id');	
			var m = scrollBtnName.substr(8,1);
			
			var winHeight = $(document).height();
			//console.log("윈도우",winHeight);
			var detailHeight = $('#txt_'+m).height();
			//console.log("텍스트",detailHeight);
			if(winHeight <= detailHeight+250){
				$('.arrowUp_'+m).css('display','block');
				$(this).addClass('upCursor');			
				$('#txt_'+m).stop().animate({'margin-top':0 },5000);	
			}else{
				$('.about_detail').animate({'margin-top':0 },0);	
				$('.arrowUp_'+m).css('display','none');
				$(this).removeClass('upCursor');			
			}			
		}).on('mouseleave', function(){
			//$('#txt_'+m).animate({'margin-top':0 },0);	
			$('.about_detail').animate({'margin-top':0 },0);	

		});
		$('.arrow.down').on('mouseenter', function() {
			var scrollBtnName = $(this).attr('id');	
			var m = scrollBtnName.substr(8,1);
			var winHeight = $(document).height();
			var detailHeight = $('#txt_'+m).height();
			if(winHeight <= detailHeight+250){
				$('.arrowDw_'+m).css('display','block');
				$(this).addClass('downCursor');			
				$('#txt_'+m).stop().animate({'margin-top': detailHeight/2 * -1},5000);	
			}else{
				$('.about_detail').animate({'margin-top':0 },0);	
				$('.arrowDw_'+m).css('display','none');
				$(this).removeClass('downCursor');			
			}						
		}).on('mouseleave', function(){
			//$('#txt_'+m).animate({'margin-top':0 },0);	
			$('.about_detail').animate({'margin-top':0 },0);	
		});	
	}
	
	$(window).resize(function(){
		hoverScroll();
	});

	
	// contact 페이지 - 돌 플로팅
	dumStoneAni();
	function dumStoneAni(){
		$('.stone_dum').animate({marginTop:'+=1%'},1500);
		$('.stone_dum').animate({marginTop:'-=1%'},2000,dumStoneAni);	
	}
	function phoneStoneAni(){
		$('.phone_icon').animate({marginTop:'+=3%'},1500);
		$('.phone_icon').animate({marginTop:'-=3%' },2000,phoneStoneAni);	
	}	
	function fbStoneAni(){
		$('.fb_icon').animate({marginTop:'+=3%'},1500);
		$('.fb_icon').animate({marginTop:'-=3%' },2000,fbStoneAni);	
	}
	function emailStoneAni(){
		$('.email_icon').animate({marginTop:'+=3%'},1500);
		$('.email_icon').animate({marginTop:'-=3%'},2000,emailStoneAni);	
	}
	
	
	// contact 페이지 - 아이콘 Drag & Drop
	function checking(){
		var phoneA = $('.phone_icon').attr('src');
		var phoneB =  'img/phone_stone.png';
		var emailA = $('.email_icon').attr('src');
		var emailB =  'img/mail_stone.png';
		var fbA = $('.fb_icon').attr('src');
		var fbB =  'img/fb_stone.png';
		function delArea(){
			if( phoneA == phoneB && emailA == emailB && fbA == fbB ){
				$('.icon_area').css('background-color','transparent');
				$('.icon_area p').css('display','none');				
			}
		}
		delArea();
	}
	
	$('.phone_icon').draggable({opacity:"0.3"});
	$('.fb_icon').draggable({opacity:"0.3"});
	$('.email_icon').draggable({opacity:"0.3"});
	$('.phone_icon').draggable({scope:"first"});
	$('.email_icon').draggable({scope:"second"});
	$('.fb_icon').draggable({scope:"third"});	
	
	$('.drop_area01').droppable({ 
		scope:"first",
		drop:function(event,ui){
			$('.phone_icon').attr('src','img/phone_stone.png');		
			$('.stone_dum').css('display','none');
			phoneStoneAni();
			checking();
		}
	 })
	$('.drop_area02').droppable({ 
		scope:"second",
		drop:function(event,ui){
			$('.email_icon').attr('src','img/mail_stone.png');
			$('.email_icon').addClass('ov_cursor');	
			$('.email_icon').click(function(){
				$('.mail_pop ').css('display','block');
			});
			$('.stone_dum').css('display','none');
			emailStoneAni();
			checking();
		}
	})	 
	 $('.drop_area03').droppable({ 
		scope:"third",
		drop:function(event,ui){
			$('.fb_icon').attr('src','img/fb_stone.png');
			$('.fb_icon').addClass('ov_cursor');
			$('.fb_link').attr({ href : 'https://www.facebook.com/joohhseok', target : "_blank" });
			$('.stone_dum').css('display','none');
			fbStoneAni();
			checking();
		}
	 })
	
	
	
	// contact 페이지 - pop up
	$('.close_btn').click(function(){
		$('.mail_pop').css('display','none');
	}); 
 
	// 메일 폼 영역
	$('#name').val('YOUR NAME').css('color','#999');
	$('#email').val('YOUR EMAIL').css('color','#999');
	$('#message').val('YOUR MESSAGE').css('color','#999');
	$('#name').one('focus',function(){
		$(this).val('').css('color','#999');
	}).blur(function(){
		if($(this).val()==''){
		$('#name').val('YOUR NAME').css('color','#999')
			.one('focus',function(){
				$(this).val('').css('color','#999');
			});
		}
	});
	$('#email').one('focus',function(){
		$(this).val('').css('color','#999');
	}).blur(function(){
		if($(this).val()==''){
		$('#email').val('YOUR EMAIL').css('color','#999')
			.one('focus',function(){
				$(this).val('').css('color','#999');
			});
		}
	});
	$('#message').one('focus',function(){
		$(this).val('').css('color','#999');
	}).blur(function(){
		if($(this).val()==''){
		$('#message').val('YOUR MESSAGE').css('color','#999')
			.one('focus',function(){
				$(this).val('').css('color','#999');
			});
		}
	});	
	
	// 메일 입력 검사
	$('#submit').click(function(){
		invalidCheck();//유효성 체크할 함수 호출
	});//click
	
	//유효성 체크하는 함수 정의
	function invalidCheck(){
		if( $('#name').attr('value')=='' ||  $('#name').attr('value')=='YOUR NAME'){
			alert('이름이 입력되지 않았습니다.');
			$('#name').focus();
			return false;
		}
		if( $('#email').attr('value')=='' ||  $('#email').attr('value')=='YOUR EMAIL'){
			alert('이메일 주소가 입력되지 않았습니다.');
			$('#email').focus();
			return false;
		}
		if( $('#message').attr('value')=='' ||  $('#message').attr('value')=='YOUR MESSAGE' ){
			alert('내용이 입력되지 않았습니다.');
			$('#message').focus();
			return false;
		}	
	}

});
