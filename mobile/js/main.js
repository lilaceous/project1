$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("static");
		$(".tab").addClass("active");
		$("#GNB").addClass("active");
		$(".dim").addClass("active");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("static");
		$(".tab").removeClass("active");
		$("#GNB").removeClass("active");
		$(".dim").removeClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("static");
		$(".tab").removeClass("active");
		$("#GNB").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#GNB .menu > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#GNB .menu > ul > li").removeClass();
			$(this).addClass("active");
			$("#GNB .menu > ul > li").find(".sub").slideUp(300);
			$(this).find(".sub").slideDown(300);
		}
		else if($(this).hasClass("active") == true){
			$(this).removeClass("active");
			$("#GNB .menu > ul > li").find(".sub").slideUp(300);
			$(this).find(".sub").slideUp(300);
		}
	});
	var n=0;
	var pos=0;

	setInterval(function(){
		n=n+1;
		pos=-1 * $(".keyvisual ul li").width() * n;
		//console.log(n+" : "+pos);
		$(".keyvisual ul").animate({"left" : pos}, 300, function(){
			if (n == 3){
				n=0;
				pos=0;
			}
			$(".keyvisual ul").animate({"left" : pos}, 0);
		});
	}, 3000);

	var banner1h;

	$(window).resize(function(){
		banner1h=$(".event_gallery img").height();
		$(".event_gallery ul").css({"height" : banner1h});
	});
	$(window).trigger("resize");
});
