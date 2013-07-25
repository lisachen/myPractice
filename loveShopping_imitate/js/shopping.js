$(function(){
	watefall('wrap');//图片瀑布流
	
	//菜单	
	$('.hd_nav_right').find('li').each(function(){
		if($(this).find('div').length > 0) {
			$('.hd_nav_right li').hover(function(){
				$(this).find('.nav_more').stop(true,true).slideDown();
			},function(){
				$(this).find('.nav_more').stop(true,true).hide();
			});
		}
	});
})
	
$(window).scroll(function(){
	var top=$(this).scrollTop(),
		toTop=$('#toTop');
	top>0?toTop.show():toTop.hide();
})
$('#toTop').click(function(){
	$('body,html').animate({scrollTop:0} ,600);
})

//瀑布流图片相框
$('#wrap .wrap_img').hover(function(){
	album=$(this).children('.add-album');
	_height=$(this).height()-10;
	album.height(_height);
	album.show();
},function(){
	$(this).children('.add-album').hide();
});
