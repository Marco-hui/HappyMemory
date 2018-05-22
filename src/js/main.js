//定义开始页为0
var nowpage=0;

//当页面加载结束后完成
$(document).ready(function(){
	//定义和屏幕一样宽度和高度的变量
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	//content和屏幕一样宽
	$(".content").width(width);
	//content有5页高度
	$(".content").height(5*height);
	//每一页宽高与屏幕一样
	$(".page").width(width);
	$(".page").height(height);
	//滑动监听
	$(".content").swipe({
		//当监听到滑动时执行的方法及参数
		//event事件  direction滑动的方向
		//distance距离  duration时间
		//fingerCount触屏点数
		swipe:function(event,direction,duration,fingerCount){
			if(direction=="up"){
				nowpage+=1;
			}
			if(nowpage>4){
				nowpage=4
			}
			if(direction=="down"){
				nowpage-=1;
			}
			if(nowpage<0){
				nowpage=0;
			}
			//给content做动画，animate:js中改变属性值的动画
			//第一个大括号{改变属性及其值} 第二个大括号{时间，效果，方法等}  complete:function(){}当动画结束之后执行的方法
//			$(".content").animate({"top":"-"+nowpage*height+"px"},{duration:2000,complete:function(){}});
			//动画结束后调用自定义方法时带()叫立即执行，不带才为结束后执行
			$(".content").animate({"top":"-"+nowpage*height+"px"},{duration:2000,complete:animateOfPage});
			
		}
	})
	$(".page1_b").fadeIn(2000,function(){
		$(".page1_p").animate({"width":"60%","height":"30%","top":"40%"},{duration:2000});
	})
})

function animateOfPage(){
	if(nowpage==1){
		//第二页动画
		$(".page2_bg").fadeIn(2000,function(){
			$(".page2_f").fadeIn(2000,function(){
				$(".page2_it").fadeIn(2000,function(){
					$(".page2_ct").fadeIn(2000);
				})
			})
		});
	}
	if(nowpage==2){
		//第三页动画
		$(".page3_bus").animate({"left":"-50%"},{duration:1000})
		$(".page3_person").animate({"right":"45%"},{duration:1500})
		$(".page3_earlytit").fadeIn(500,function(){
			$(".page3_lBtit").fadeIn(1000);
		})
		$(".page3_bus").fadeOut(1000);
		$(".page3_earlytit").fadeOut(1000);
		$(".page3_lBtit").fadeOut(1000);
		$(".page3_person").fadeOut(1000);
		$(".page3_lBS").fadeOut(1000,function(){
			$(".page3_myTAvatar").fadeIn(1000,function(){
				$(".page3_myTWall").fadeIn(1000,function(){
					$(".page3_myTSpace").fadeIn(1000,function(){
						$(".page3_myTWhere").fadeIn(1000);
					})
				})
			});
		});
		
	}
}

function beat(obj){
	obj.src="img/wechat/lightOn.png";
	//fadeout()淡出
	$(".page4_ofB").fadeOut(2000);
	$(".page4_gui").fadeOut(2000);
	$(".page4_tit").fadeOut(2000);
	
	$(".page4_onB").fadeIn(2000);
	$(".page4_tit1").fadeIn(2000);
}

function playMyMusic(obj){
	var player=document.getElementById("player");
	if(player.paused){
		player.play();
		obj.src="img/wechat/musicBtn.png";
		$(".playMusic").addClass("musicRotate");
	}
	else{
		player.pause();
		obj.src="img/wechat/musicBtnOff.png";
		//removeClass()移除类型
		$(".playMusic").removeClass("musicRotate");
	}
}
