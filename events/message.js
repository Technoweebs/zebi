// Message Event
module.exports = {
	config: { // Some config
		name: "message",
		enabled: true
	},
	init: (client) => {	this.client = client; this.config = client.config }, // Variables Initialization
	callback: (message) => { // Event Callback
		// Some checks
		if(message.author.bot) return;
		if(message.channel.type != "text") return;
		if(!message.content.startsWith(this.config.bot.prefix)) return;

		// Parse the message content
		message.parsed = {
			prefix: this.config.bot.prefix,
			get args() { return message.content.slice(this.prefix.length).split(' '); },
			get command() { return this.args[0]; }
		};

		// Command check, and exec
		if(!this.client.commands[message.parsed.command]) return message.reply("That command doesn't exists.");
		this.client.commands[message.parsed.command].exec(message);
	}
}