var xqy = $("#xqy");
var img = xqy.children[0].children[0];
var boxRightHeight = xqy.children[1].offsetHeight;

var boxHeight = xqy.offsetTop;

window.onscroll = function(){
	// 判断图片触发距离
	if(scroll().top >= boxHeight){
		img.style.top = scroll().top - boxHeight + "px";
	}
	if(scroll().top >= boxRightHeight- img.offsetHeight + boxHeight){
		img.style.top = boxRightHeight- img.offsetHeight + "px";
	}
}