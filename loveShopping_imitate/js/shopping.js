window.onload=function(){
	watefall('wrap');//图片瀑布流
	toTop_btn();// 向上按钮的显示隐藏
}

window.onscroll = function(){toTop_btn();} 
function toTop_btn(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  
    var toTop= document.getElementById( "toTop" );
    if( t >1 ) { 
			toTop.style.display='block';
    } else {
       toTop.style.display = "none";  
    } 
} 	
//菜单
$('.hd_nav_right li').hover(function(){
	$(this).find('dl').show();
},function(){
	$(this).find('dl').hide();
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

