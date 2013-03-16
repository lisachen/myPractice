$(function(){
	/*ie6 png fix*/
	var ie6 = $.browser.msie && $.browser.version == '6.0';
	if(ie6) DD_belatedPNG.fix('.ie6pngfix');
	
	/*--tab---*/
	$('.tabs li').hover(function(){
		var id=$(this).find('a').attr('href');
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabPanel').find(id).removeClass('hide').siblings().addClass('hide');
	});
	/*--tab-end---*/
	
	$('.nav li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	/*--sliderImg---*/	
     var len  = $(".num > li").length;
	 var index = 0;
	 var adTimer;
	 $(".num li").mouseover(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 $('.sliderImg_main').hover(function(){
			 clearInterval(adTimer);
	 },function(){
		 adTimer = setInterval(function(){
			showImg(index)
			index++;
			if(index==len){index=0;}
		  } , 2000);
	 }).trigger("mouseleave");
	 /*--sliderImg--end--*/	
	 
	 $('.content_pic > li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');	 
	 });
	 
	/*--pic_silder--*/	
//	var timer= setInterval(function() {$('.pic_right').click();},1);
//	$('.imgList li').mouseover(function(){
//		clearInterval(timer);	
//	});
	var _width=$('.imgBox li').width()+8;//显示的长度
	if(!$('.imgList').is(':animated')){
		$('.pic_right').click(function(){
			$('.imgList').animate({left:'-='+_width},'show');
			$('.imgList li:first').clone().appendTo('.imgList');
			$('.imgList li:first').remove();
		});
		$('.pic_left').click(function(){
			$('.imgList').animate({left:"+="+_width},'show');
			$('.imgList li:last').clone().prependTo('.imgList');
			$('.imgList li:last').remove();
		});
	}
})
	/*--pic_silder--end--*/
	
function showImg(index){
	var adHeight = $(".sliderImg_main").height();
	$(".slider").stop(true,false).animate({bottom : -adHeight*index},1000);
	$(".num li").removeClass("on").eq(index).addClass("on");
	var alt=$('.slider img').eq(index).attr('alt');
	$('.sliderImg_title h3').text(alt);
}