(function(){
/**
args {
province 省
city	市
citySpan Element
town	县
townSpan Element
waitImg 等待图片
}
*/
function $(id) {
	return document.getElementById(id);
}

window.onload=function(){
	new AreaSelect({
		province:$("province"),
		city:$("city"),
		town:$("town"),
		//citySpan:$("citySpan"),
		//townSpan:$("townSpan"),
		waitImg:$("waitPic")
	});
}

function AreaSelect(args) {
	//Base.init(AreaSelect,this,args);//初始化
	this.originalArgs=args;//对象原型
	for (var i in args) {
		this[i]=args[i];
	}
	if (AreaSelect.defaultArgs) {//默认对象
		for (i in AreaSelect.defaultArgs) {
			if (args[i]===undefined)
				this[i]=AreaSelect.defaultArgs[i].valueOf(this);//可返回 String 对象的原始值
		}
	}
	
	var $this=this;
	//addEvent(this.province,"change",function () {
	  this.province.onchange=function(){
		//var css=this.value?"inline":"none";
//		$this.citySpan.style.display=css;
//		$this.townSpan.style.display="none";
		$this.initSelect($this.province.value,$this.city);
	};
	//addEvent(this.city,"change",function () {
	this.city.onchange=function(){
		//var css=this.value?"inline":"none";
//		$this.townSpan.style.display=css;
		$this.initSelect($this.city.value,$this.town);
	};
}
//
AreaSelect.prototype={
	initSelect:function (id,select) {
		select.options.length=1;
		this.waitImg.style.display="inline";
		var $this=this;
//AreaSelect.proxy="action.php";//代理服务器
		ajax({
			url:"action.php",
			data:{aid:id},
			success:function (json) {
				var data=eval("("+json+")");
				for (var i=0,opt;i<data.length;i++) {
					opt=new Option(data[i][0],data[i][1]);
					select.add(opt,null);
				}
				$this.waitImg.style.display="none";
			}
		});
	}
};
//

function createXHR() {
	return window.XMLHttpRequest?
		new XMLHttpRequest():
		new ActiveXObject("Microsoft.XMLHTTP");//IE6
}	

function params(o) {
	var a=[];
	for (var i in o) {
		if (o[i]!=undefined) {
			a.push(encodeURIComponent(i)+"="+encodeURIComponent(o[i]));
		}
	}
	return a.join("&");
}

function ajax(args) {
	var xhr=createXHR(),
		  data=params(args.data);
	args.method=args.method || "get";
	
	if (/get/i.test(args.method)) {
		args.url+="?"+data;
	}
	if (!args.cache) {
		if (args.url.indexOf("?")<0) args.url+="?";
		args.url+="&"+(+new Date());
	}
	xhr.open(args.method,args.url,true);
	
	xhr.onreadystatechange=function () {
		if (xhr.readyState===4 && xhr.status===200) {
			args.success(xhr.responseText,xhr.responseXML);
		}
	};
	if (/post/i.test(args.method)) {
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(data);
	} else {
		xhr.send();
	}
	
}
})();




