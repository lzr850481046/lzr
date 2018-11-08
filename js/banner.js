//轮播
(function(){
	var banner=document.querySelector("#banner");
	var imgs=document.querySelectorAll("#banner>div>a>img");
	var bprev=document.querySelector(".bprev");
	var bnext=document.querySelector(".bnext");
	var circles=document.querySelectorAll("#banner>ul	>li")
	//设置所有图片透明度为0
	function bnone(){
		for(var img of imgs){
			img.style.opacity="0";
		}
	};
	//清除圆背景色
	function cnone(){
		for(var circle of circles){
			circle.style.background="";
		}
	};
	var i=0;
	//下一张
	function movenext(){
		bnone();
		cnone();
		imgs[i].style.opacity="1";
		circles[i].style.background="rgb(143, 7, 167)";
		i++;
		if(i>imgs.length-1)i=0;
	}
	//上一张
	function moveprev(){
		bnone();
		cnone();
		imgs[i].style.opacity="1";
		circles[i].style.background="rgb(143, 7, 167)";
		i--;
		if(i<0)i=imgs.length-1;
	}
	movenext()
	var timer=setInterval(()=>movenext(),4000);

	//点击上一张按钮
	bprev.onclick=function(){
		clearInterval(timer)
		moveprev();
		timer=setInterval(()=>movenext(),4000);
	}

	//点击下一张按钮
	bnext.onclick=function(){
		clearInterval(timer)
		movenext();
		timer=setInterval(()=>movenext(),4000);
	}

	//圆圈悬停时 对应当前轮播图片
	for(let k in circles){
		circles[k].onmouseover=function(){
			clearInterval(timer);
			bnone();
			cnone();
			imgs[k].style.opacity="1";
			circles[k].style.background="rgb(143, 7, 167)";
		}
		circles[k].onmouseout=function(){
			timer=setInterval(()=>movenext(),4000);
		}
	}
})();