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
		$("#nav").toggleClass("navtopclicked"),
		$("#titel").toggleClass("titelclicked"),
		$("#navwrapper").toggleClass("navsideclicked"),
		blokshow();
		});
		}


function logo(){
	$("#img").hover(function(){
		$("#img").toggleClass("imghover")
	})
}

function changeColor(){
	$("#blok1").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok2").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok3").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok4").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok5").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok6").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok7").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok8").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok9").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok10").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok11").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok12").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok13").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok14").click(function(){
		$('body').css("background-color", $(this).css('background-color'))
	}),
	$("#blok15").click(function(){
		$('body').css("background-color", $(this).css('background-color')),$('#hilda').css("opacity", "1")
	})

}

function blokshow(){
	$("#blok1").toggleClass('displayblok'),
	$("#blok2").toggleClass('displayblok'),
	$("#blok3").toggleClass('displayblok'),
	$("#blok4").toggleClass('displayblok'),
	$("#blok5").toggleClass('displayblok'),
	$("#blok6").toggleClass('displayblok'),
	$("#blok7").toggleClass('displayblok'),
	$("#blok8").toggleClass('displayblok'),
	$("#blok9").toggleClass('displayblok'),
	$("#blok10").toggleClass('displayblok'),
	$("#blok11").toggleClass('displayblok'),
	$("#blok12").toggleClass('displayblok'),
	$("#blok13").toggleClass('displayblok'),
	$("#blok14").toggleClass('displayblok'),
	$("#blok15").toggleClass('displayblok')

}


