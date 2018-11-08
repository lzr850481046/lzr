//放大镜
var $ul=$(".dp_small");
var $md_img=$(".dp_middle>img");
var $lg_img=$(".dp_large>img");
$ul.on("mouseover","img",function(){
  var $img=$(this);
  $md_img.attr("src",$img.attr("data-md"));
  $lg_img.attr("src",$img.attr("data-lg"));
})
var $dp_gd=$(".dp_gd");
var $dp_mv=$(".dp_mv");
var $dp_large=$(".dp_large");
var mvSize=150;var gdSizew=350;var gdSizeh=400;
var max1=gdSizew-mvSize;var max2=gdSizeh-mvSize;
$dp_gd
  .hover(()=>{
    $dp_mv.toggle();
    $dp_large.toggle();
  })
  .mousemove((e)=>{
    var top=e.offsetY-mvSize/2;
    var left=e.offsetX-mvSize/2;
    if(top<0){top=0}else if(top>max2){top=max2};
    if(left<0){left=0}else if(left>max1){left=max1};
    $dp_mv.css({left,top})
    $lg_img.css({
      "top":`-${2*top}px`,
      "left":`-${2*left}px`
    })
  })

//隐藏导航栏
var $hidenav=$(".hidenav");
$(window).scroll(function(){
	var $show_p=$(".show_p");
  var scrollTop=$("html,body").scrollTop();
  var offsetTop=$show_p.offset().top;
	if(scrollTop-innerHeight/2>offsetTop){
		$hidenav.removeClass("d-none")
	}else{
		$hidenav.addClass("d-none")
  }
})

//滚动图
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0){
        tab.scrollLeft-=tab1.offsetWidth;
    }else{
        tab.scrollLeft++;
    }
}
var leftScr=setInterval(Marquee,15);
tab.onmouseover=function(){
    clearInterval(leftScr);
}
tab.onmouseout=function(){
    leftScr=setInterval(Marquee,15);
}