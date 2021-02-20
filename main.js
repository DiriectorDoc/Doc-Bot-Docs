/*eslint-env es6*/
/*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
/*eslint no-fallthrough: "off"*/
/*eslint no-undef: "off"*/
$(function(){
	let today = new Date,
		time = `${today.getHours() ? (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) : 12}:${today.getMinutes() < 10 ? "0"+today.getMinutes() : today.getMinutes()} ${today.getHours() > 11 ? "PM" : "AM"}`,
		
		about = $(`<h2 class="command">!about</h2><p>Displays various info and stats pertaining to Doc Bot.</p><h3>Preview</h3><div class="embed-wrapper" aria-hidden="false"><div class="embed-grid"><div class="embed-author top-margin"><img alt="" class="embed-author-icon" src="https://images-ext-2.discordapp.net/external/zye06injilUxwVOhDFoW-wsBpEv-SJL3qkTvCQ4nhTs/https/cdn.discordapp.com/avatars/745689391149613057/21f6e4fb056166c056cb8e53f8b9fa5a.webp"><span class="embed-author-name">Doc Bot</span></div><div class="embed-title top-margin">About</div><div class="embed-description top-margin">Doc Bot's info and stats</div><div class="embed-fields"><div class="embed-field" style="grid-column:1/5"><div class="embed-field-name">Version</div><div class="embed-field-value">0.9.1</div></div><div class="embed-field" style="grid-column:5/9"><div class="embed-field-name">Creator</div><div class="embed-field-value">Diriector_Doc</div></div><div class="embed-field" style="grid-column:9/13"><div class="embed-field-name">Repository</div><div class="embed-field-value"><a class="discord-anchor anchorUnderlineOnHover-2ESHQB" title="https://github.com/DiriectorDoc/Doc-Bot" href="https://github.com/DiriectorDoc/Doc-Bot" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">https://github.com/DiriectorDoc/Doc-Bot</a></div></div><div class="embed-field" style="grid-column:1/5"><div class="embed-field-name">Age</div><div class="embed-field-value">0 years</div></div><div class="embed-field" style="grid-column:5/9"><div class="embed-field-name">Type</div><div class="embed-field-value">Electric/Psychic</div></div><div class="embed-field" style="grid-column:9/13"><div class="embed-field-name">Ability</div><div class="embed-field-value">Download</div></div><div class="embed-field" style="grid-column:1/5"><div class="embed-field-name">Strength</div><div class="embed-field-value">+1</div></div><div class="embed-field" style="grid-column:5/9"><div class="embed-field-name">Dexterity</div><div class="embed-field-value">-2</div></div><div class="embed-field" style="grid-column:9/13"><div class="embed-field-name">Constitution</div><div class="embed-field-value">0</div></div><div class="embed-field" style="grid-column:1/5"><div class="embed-field-name">Inteligence</div><div class="embed-field-value">+10</div></div><div class="embed-field" style="grid-column:5/9"><div class="embed-field-name">Wisdom</div><div class="embed-field-value">+1</div></div><div class="embed-field" style="grid-column:9/13"><div class="embed-field-name">Charisma</div><div class="embed-field-value">+2</div></div><div class="embed-field" style="grid-column:1/7"><div class="embed-field-name">Favourite food</div><div class="embed-field-value">Cookies</div></div><div class="embed-field" style="grid-column:7/13"><div class="embed-field-name">Hobbies</div><div class="embed-field-value">Watching your every move</div></div></div><a class="discord-anchor" tabindex="0" href="https://cdn.discordapp.com/avatars/745689391149613057/21f6e4fb056166c056cb8e53f8b9fa5a.webp" rel="noreferrer noopener" target="_blank" role="button" style="height:80px;width:80px;overflow:hidden;grid-row:1/8;grid-column:2/2;word-break:break-word"><img alt="" src="https://images-ext-2.discordapp.net/external/zye06injilUxwVOhDFoW-wsBpEv-SJL3qkTvCQ4nhTs/https/cdn.discordapp.com/avatars/745689391149613057/21f6e4fb056166c056cb8e53f8b9fa5a.webp?width=100&amp;height=100"></a><div class="embed-footer top-margin"><span class="embed-footer-text">Today at ${time}</span></div></div></div><h3>Usage</h3><p>This command does not accept a parameter. Entering anything following the command, even a <a href="#help">help</a> argument, does nothing.</p>`),
		
		bug = $('<h2 class="command">!bug</h2><p>Replied with a link for the user to submit a bug as well as a link to the <code class="channel">#talk-to-the-doc</code> channel. This is the link they will see:</p><div class="blockquote-container"><div class="blockquote-divider"></div><blockquote><a href="https://github.com/DiriectorDoc/Doc-Bot/issues/new?assignees=&amp;labels=bug&amp;template=bug_report.md&amp;title=">https://github.com/DiriectorDoc/Doc-Bot/issues/new?assignees=&amp;labels=bug&amp;template=bug_report.md&amp;title=</a></blockquote></div><h3 id="usage-1">Usage</h3><p>This command does not accept a parameter. Entering anything following the command, even a <a href="#help">help</a> argument, does nothing.</p>'),
		
		commands = $(`<h2 class="command">!commands</h2><p>Displays a list of commands</p><h3>Preview</h3><div class="embed-wrapper" aria-hidden="false" style="border-color: rgb(52, 152, 219);"><div class="embed-grid"><div class="embed-author top-margin"><img alt="" class="embed-author-icon" src="https://images-ext-2.discordapp.net/external/zye06injilUxwVOhDFoW-wsBpEv-SJL3qkTvCQ4nhTs/https/cdn.discordapp.com/avatars/745689391149613057/21f6e4fb056166c056cb8e53f8b9fa5a.webp"><span class="embed-author-name">Doc Bot</span></div><div class="embed-title top-margin">Commands</div><div class="embed-description top-margin">list of commands</div><div class="embed-fields"><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!about</code></div><div class="embed-field-value">Displays information about me, Doc Bot</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!bug</code></div><div class="embed-field-value">Replies with a link for submitting a bug</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!colour</code></div><div class="embed-field-value">Changes display name colour (also accepts <code class="inline">!color</code>)</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!commands</code></div><div class="embed-field-value">Displays this here list</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!notify</code></div><div class="embed-field-value">Enables/Disables stream notifications (user specific)</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!request</code></div><div class="embed-field-value">Sends a request to D_Doc</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!speedrun</code></div><div class="embed-field-value">Displays Brawlhalla speedrun leaderboards</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!yellatme</code></div><div class="embed-field-value">Displays the 'admin only command' message</div></div><div class="embed-field" style="grid-column: 1 / 13;"><div class="embed-field-name"><code class="inline">!wisdom</code></div><div class="embed-field-value">Displayes a random quote</div></div></div><div class="embed-footer top-margin"><span class="embed-footer-text">Today at ${time}</span></div></div></div><h3>Usage</h3><p>This command does not accept a parameter. Entering anything following the command, even a <a href="#help">help</a> argument, does nothing.</p>`),
		
		colour = $('<h2 class="command">!colour</h2><div class="blockquote-container"><div class="blockquote-divider"></div><blockquote>Note: Using the American spelling of this command (<code>!color</code>) will also work.</blockquote></div><p>The user who enters this command will have their display name change color depending upon the string preceding it.</p><h3 id="usage-2">Usage</h3><p>The first argument will be the name of the colour to which the name is being changed. The user can pick between any of the following colours:</p><ul><li><code>Red</code></li><li><code>Orange</code></li><li><code>Yellow</code></li><li><code>Green</code></li><li><code>Blue</code></li><li><code>Cyan</code></li><li><code>Purple</code></li><li><code>Violet</code> (same as purple)</li><li><code>Pink</code></li><li><code>White</code></li></ul><p>This parameter is not case sensitive.</p><h3>Example</h3><p>The following command will change the user&#39;s display name color to red:</p><pre class="discord-text-area">!colour red</pre><p>Additionally, you can list the available colours by entering</p><pre class="discord-text-area">!colour colours</pre><p>Using this parameter for <code>!colour</code> is identical to entering one of the <a href="#help">help</a> arguments.</p>'),
		
		notify = $('<h2 class="command">!notify</h2><p>Using this command will give the user the <strong class="stream-role">@Stream notifs</strong> role. This role is used by Streamcord bot to notify thoes who whish to be notified.</p><p>To remove yourself from having this role, simply use <code>!notify</code> again and the role will be removed.</p>'),
		
		request = $('<h2 class="command">!request</h2><p>Sends a request to the admin depending on the type of request.</p><h3 id="usage-3">Usage</h3><p>The syntax for this command is as follows:</p><pre><code>!request [type] [arguments]</code></pre><h4>[type]</h4><p>The type of request you would like to make.</p><p>Possible types:</p><ul><li><code>delete</code>: Request for deletion of a post</li><li><code>censor</code>: Request for censorship of a post</li><li><code>wisdom</code>: Request a quote be added to <a href="#wisdom"><code>!wisdom</code></a></li></ul><h4>[arguments]</h4><p>The argument after the <code>delete</code> or <code>censor</code> request should be the link to the discord message in question. To get the link of a discord message, right-click on the message then select the &quot;Copy Message Link&quot; option.</p><p>The argument after the <code>wisdom</code> request should quote you would like to add to the <code>!wisdom</code> command. The quote should be in quotations and the author and the year should follow. If the author or the year is unknown, specify that it is unknown.</p><h3>Examples</h3><pre class="discord-text-area">!request delete https://discordapp.com/channels/123456789012345678/234567890123456789/345678901234567890<br />!request wisdom &quot;Hi there&quot; - John, 2020</pre>'),
		
		speedrun = $('<h2 class="command">!speedrun</h2><p>Displays the Brawlhalla speedrun leaderboards. The information displayed was copied directly from <a href="https://speedrun.com/brawlhalla">speedrun.com/brawlhalla</a>.</p><h3 id="usage-4">Usage</h3><p>The syntax for this command is as follows:</p><pre><code>!speedrun [category] [ruleset...[ruleset2]]</code></pre><h4>[category]</h4><p>Possible category parameters:</p><ul><li><code>tournament</code></li><li><code>horde</code></li><li><code>tutorial%</code> or <code>tutorial</code></li></ul><h4>[ruleset]</h4><p>Tournament only:</p><ul><li><code>sigs</code> (default)</li><li><code>nosigs</code></li></ul><p>Horde only<br /><em>First ruleset</em></p><ul><li><code>2p</code> (default)</li><li><code>3p</code></li><li><code>4p</code></li></ul><p><em>Second ruleset</em></p><ul><li><code>wave11</code> (default)</li><li><code>wave21</code></li><li><code>wave26</code></li></ul><h3 id="example-1">Examples</h3><pre class="discord-text-area" style="margin-bottom: 16px;">!speedrun tournament sigs<br />!speedrun horde 2p wave21<br />!speedrun tutorial%<br /><br />!speedrun tournament<br />!speedrun horde</pre><div class="blockquote-container"><div class="blockquote-divider"></div><blockquote><strong>Note</strong>: If a category only has 1 ruleset, or has no ruleset at all, the proceeding parameter will be ignored</blockquote></div>'),
		
		wisdom = $('<h2 class="command">!wisdom</h2><p>Replies with a random quote, most of which were said by Diriector_Doc himself.</p><h3 id="usage-5">Usage</h3><p>This command does not accept a parameter. Entering anything following the command, even a <a href="#help">help</a> argument, does nothing.</p>'),
		
		yellatme = $('<h2 class="command">!yellatme</h2><p>Replies with the &quot;admin-only command&quot; message. This message is randomly generated each time.</p><div class="blockquote-container"><div class="blockquote-divider"></div><blockquote>Note: This command works identically to how every admin-only command works. The only difference is that this command appears on the <a href="#commands"><code>!commands</code></a> list. Consequently, if an admin uses this command, nothing happens.</blockquote></div><h3 id="usage-6">Usage</h3><p>This command does not accept a parameter. Entering anything following the command, even a <a href="#help">help</a> argument, does nothing.</p>'),
		
		help = $('<h2>Help Arguments</h2><p>If you want to know the syntax, usage, or otherwise of a command, simply type the command followed by one of these strings:</p><ul><li><code>help</code></li><li><code>/?</code></li><li><code>options</code></li></ul><h3 id="example-2">Example</h3><pre class="discord-text-area">!colour /?</pre><p>This trick will only work with commands that accept a parameter. Single-word commands will ignore all arguments that follow it and be carried through like always.</p>'),
		
		secret = $('<h2>Secret Commands</h2><p>Doc Bot has a few commands that do not appear on the command list. These commands are hidden for people to discover on their own.</p>');
	
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
	
	loadInfo(window.location.hash || "#")
})