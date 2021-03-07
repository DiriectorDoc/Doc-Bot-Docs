/*eslint-env es6*/
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
/*eslint no-fallthrough: "off"*/
/*eslint no-undef: "off"*/
$(function(){
	let today = new Date,
		time = `${today.getHours() ? today.getHours() > 12 ? today.getHours() - 12 : today.getHours() : 12}:${today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes()} ${today.getHours() > 11 ? "PM" : "AM"}`;
	$(".embed-footer-text").html("Today at "+time)
	$('[field="birthday"]').html(`August 19, 2020\n(${(Date.now()-15978096e5)/315576e5|0} year${(Date.now()-15978096e5)/315576e5|0?"":"s"} ago)`)
		
	let about = $("#info>*").slice(0, 6),
		bug = $("#info>*").slice(6, 11),
		commands = $("#info>*").slice(11, 17),
		colour = $("#info>*").slice(17, 30),
		notify = $("#info>*").slice(30, 33),
		request = $("#info>*").slice(33, 47),
		speedrun = $("#info>*").slice(47, 65),
		wisdom = $("#info>*").slice(65, 69),
		yellatme = $("#info>*").slice(69, 74),
		help = $("#info>*").slice(74, 80),
		secret = $("#info>*").slice(80);
	
	function loadInfo(hash){
		$(".active").removeClass("active")
		switch(hash || "#about"){
			case "#bug":
				$("#info").html(bug);
				$('tr[house="bug"]').addClass("active")
				break;
			case "#colour":
				$("#info").html(colour);
				$('tr[house="colour"]').addClass("active")
				break;
			case "#commands":
				$("#info").html(commands);
				$('tr[house="commands"]').addClass("active")
				break;
			case "#notify":
				$("#info").html(notify);
				$('tr[house="notify"]').addClass("active")
				break;
			case "#request":
				$("#info").html(request);
				$('tr[house="request"]').addClass("active")
				break;
			case "#speedrun":
				$("#info").html(speedrun);
				$('tr[house="speedrun"]').addClass("active")
				break;
			case "#wisdom":
				$("#info").html(wisdom);
				$('tr[house="wisdom"]').addClass("active")
				break;
			case "#yellatme":
				$("#info").html(yellatme);
				$('tr[house="yellatme"]').addClass("active")
				break;
			case "#help":
				$("#info").html(help);
				$('tr[house="help"]').addClass("active")
				break;
			case "#secret":
				$("#info").html(secret);
				$('tr[house="secret"]').addClass("active")
				break;
			case "#about":
				$("#info").html(about);
				$('tr[house="about"]').addClass("active")
				break;
			default:
				window.location = "#";
		}
	}
	
	$(window).on("hashchange", function(){
		if(window.location.hash != "#")
			loadInfo(window.location.hash);
	})
	$(".footer span").html("Doc Bot is licensed under<br />an MIT License.")
	
	loadInfo(window.location.hash)
	$("#info").removeAttr("style")
})