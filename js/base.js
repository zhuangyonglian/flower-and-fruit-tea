			
			// 获取对象
			// id 获取  document.getElementById()   $("#con")
			// class 获取 document.getElementsByClassName()  $(".con")
			// 标签 获取  document.getElementsByTagName()   $("div")
			
			function $(str){
				var s = str.substr(0,1); // # . 
				var ss = str.substr(1); //#con ==> con
				switch(s){
					case "#":
						return document.getElementById(ss);
						break;
					case ".":
						return getClass(ss);
						break;
					default:
						return document.getElementsByTagName(str);
				}
			}
			
			function getClass(classname){
				// 如果有方法名,是兼容ie6,7,8
				if(document.getElementsByClassName){
					return document.getElementsByClassName(classname);
				}
				
				var con = document.getElementsByTagName("*");  //获取所有标签
				
				var arr = [] ; //存放所有满足条件数组
				// 循环所有标签
				for(var i = 0;i < con.length;i++){
					// li
					// con aa bb
					var spl = con[i].className.split(" "); //数组
					// 字符串切割后的数组
					for(var j = 0;j < spl.length;j++){
						
						if(spl[j] == classname){
							arr.push(con[i]);
						}
					}
				}
				
				return arr;
			}
			// 解决滚动条兼容性
			function scroll(){
				
				if(window.pageYOffset != null){
					return {
						top:window.pageYOffset,
						left:window.pageXOffset
					};
				}
				
				if(document.compatMode == "CSS1Compat"){
					return{
						top: document.documentElement.scrollTop,
						left:document.documentElement.scrollLeft
					}
				}
				
				return{
					top:document.body.scrollTop,
					left:document.body.scrollLeft
				}
				
			}
		
		