// JavaScript Document
function watefall(id){
 var wrap=document.getElementById(id),
	content=wrap.getElementsByTagName('li'),
	wrapWidth=wrap.offsetWidth,//获取宽度包括padding和border
	liWidth=content[0].offsetWidth,
	colNum=Math.floor(wrapWidth/liWidth),//计算列数
	padding=Math.floor((wrapWidth-liWidth*colNum)/(colNum-1)),//计算外框元素剩余宽度并计算左右留白
	len=content.length,//li的个数
	top=20,//离顶部的距离
	maxHeight=0,//瀑布高度
	column=new Array();
 for(var i=0;i<colNum;i++){
	column[i]=new Array();
	column[i].top=top;
	if(i==0){
		column[i].left=0;
	}else{
	column[i].left=(liWidth*i)+padding*(i);}//计算左边距离	
 }
		
 for(var i=0;i<len;i++){
	var row=i+1;
	if(row%colNum==0){//计算元素在第几列
		sub=colNum;
	}else{
		sub=row%colNum;
	}
	
	content[i].style.position = "absolute" ;
	content[i].style.top=column[sub-1].top+'px';
	content[i].style.left=column[sub-1].left+'px';
	column[sub-1].top += content[i].offsetHeight + top ;
 }
 for(var i=0;i<colNum;i++) {	//获取瀑布流整体布局高度
			if(column[i].top > maxHeight) maxHeight = column[i].top ;
		}
		wrap.style.height = maxHeight+"px" ;	//给外框元素赋值以防止出现子元素溢出外框元素	
}	