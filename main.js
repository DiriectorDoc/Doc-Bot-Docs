/*eslint-env es6*/
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
/*eslint no-fallthrough: "off"*/
/*eslint no-undef: "off"*/
$(function(){
	let today = new Date,
		time = `${today.getHours() ? today.getHours() > 12 ? today.getHours() - 12 : today.getHours() : 12}:${today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes()} ${today.getHours() > 11 ? "PM" : "AM"}`;
	$(".embed-footer-text").html("Today at "+time)
		
	let about = $("h2[about],h2[about]+p,h2[about]+p+h3,h2[about]+p+h3+div,h2[about]+p+h3+div+h3,h2[about]+p+h3+div+h3+p"),
		bug = $("h2[bug],h2[bug]+p,h2[bug]+p+div,h2[bug]+p+div+h3,h2[bug]+p+div+h3+p"),
		commands = $("h2[commands],h2[commands]+p,h2[commands]+p+h3,h2[commands]+p+h3+div,h2[commands]+p+h3+div+h3,h2[commands]+p+h3+div+h3+p"),
		colour = $("h2[colour],h2[colour]+div,h2[colour]+div+p,h2[colour]+div+p+h3,h2[colour]+div+p+h3+p,h2[colour]+div+p+h3+p+ul,h2[colour]+div+p+h3+p+ul+p,h2[colour]+div+p+h3+p+ul+p+h3,h2[colour]+div+p+h3+p+ul+p+h3+p,h2[colour]+div+p+h3+p+ul+p+h3+p+pre,h2[colour]+div+p+h3+p+ul+p+h3+p+pre+p,h2[colour]+div+p+h3+p+ul+p+h3+p+pre+p+pre,h2[colour]+div+p+h3+p+ul+p+h3+p+pre+p+pre+p"),
		notify = $("h2[notify],h2[notify]+p,h2[notify]+p+p"),
		request = $("h2[request],h2[request]+p,h2[request]+p+h3,h2[request]+p+h3+p,h2[request]+p+h3+p+pre,h2[request]+p+h3+p+pre+h4,h2[request]+p+h3+p+pre+h4+p,h2[request]+p+h3+p+pre+h4+p+p,h2[request]+p+h3+p+pre+h4+p+p+ul,h2[request]+p+h3+p+pre+h4+p+p+ul+h4,h2[request]+p+h3+p+pre+h4+p+p+ul+h4+p,h2[request]+p+h3+p+pre+h4+p+p+ul+h4+p+p,h2[request]+p+h3+p+pre+h4+p+p+ul+h4+p+p+h3,h2[request]+p+h3+p+pre+h4+p+p+ul+h4+p+p+h3+pre"),
		speedrun = $("h2[speedrun],h2[speedrun]+p,h2[speedrun]+p+h3,h2[speedrun]+p+h3+p,h2[speedrun]+p+h3+p+pre,h2[speedrun]+p+h3+p+pre+h4,h2[speedrun]+p+h3+p+pre+h4+p,h2[speedrun]+p+h3+p+pre+h4+p+ul,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul+p,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul+p+ul,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul+p+ul+h3,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul+p+ul+h3+pre,h2[speedrun]+p+h3+p+pre+h4+p+ul+h4+p+ul+p+ul+p+ul+h3+pre+div"),
		wisdom = $("h2[wisdom],h2[wisdom]+p,h2[wisdom]+p+h3,h2[wisdom]+p+h3+p"),
		yellatme = $("h2[yellatme],h2[yellatme]+p,h2[yellatme]+p+div,h2[yellatme]+p+div+h3,h2[yellatme]+p+div+h3+p"),
		help = $("h2[help],h2[help]+p,h2[help]+p+ul,h2[help]+p+ul+h3,h2[help]+p+ul+h3+pre,h2[help]+p+ul+h3+pre+p"),
		secret = $("h2[secret],h2[secret]+p");
	
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
			default:
				window.location = "#";
			case "#about":
				$("#info").html(about);
				$('tr[house="about"]').addClass("active")
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