$(document).ready(function(){
	resize();
	changeColor();
	menu();
	logo();
	hide();
});

function resize(){
	$(document).height($(window).height());
	$(document).width($(window).width());
};

function hide(){
	$("#blok1").hide();
	$("#blok2").hide();
	$("#blok3").hide();
	$("#blok4").hide();
	$("#blok5").hide();
	$("#blok6").hide();
	$("#blok7").hide();
	$("#blok8").hide();
	$("#blok9").hide();
	$("#blok10").hide();
	$("#blok11").hide();
	$("#blok12").hide();
	$("#blok13").hide();
	$("#blok14").hide();
	$("#blok15").hide();

}

function menu(){
	$("#hamburgerwrap").click(function(){
		$("#top").toggleClass("crossleft"),
		$("#middle").toggleClass("displaynone"),
		$("#bottom").toggleClass("crossright"),
		$("#nav").toggleClass("navclicked"),
		$("#titel").toggleClass("titelclicked"),

		$("#blok1").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok2").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok3").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok4").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok5").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();

		$("#blok6").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();

		$("#blok7").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();	
		
		$("#blok8").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();

		$("#blok9").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok10").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok11").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok12").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();

		$("#blok13").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok14").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
		
		$("#blok15").delay(250).queue(function(){
			$(this).fadeToggle(500, "linear");
			$(this).dequeue();
								
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
		});
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


