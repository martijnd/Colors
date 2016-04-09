$(document).ready(function(){
	resize();
	changeColor();
	menu();
	logo();
});

function resize(){
	$(document).height($(window).height());
	$(document).width($(window).width());
};

function menu(){
	$("#hamburgerwrap").click(function(){
		$("#top").toggleClass("crossleft"),
		$("#middle").toggleClass("displaynone"),
		$("#bottom").toggleClass("crossright"),
		$("#nav").toggleClass("navclicked"),
		$("#titel").toggleClass("titelclicked")
	})
}

function logo(){
	$("#logo").hover(function(){
		$("#img").toggleClass("imghover")
	})
}

function changeColor(){
	$("#blok1").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok2").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok3").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok4").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok5").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok6").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok7").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok8").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok9").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok10").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok11").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok12").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok13").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok14").hover(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok15").hover(function(){
		$('body').css("background-color", $(this).css('background-color')),$('#hilda').css("opacity", "1")
	})

}


