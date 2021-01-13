module.exports = {
	config: {
		name: "message",
		enabled: true
	},
	init: (client) => {	this.client = client; this.config = client.config },
	callback: (message) => {
		if(message.author.bot) return;
		if(message.channel.type != "text") return;
		if(!message.content.startsWith(this.config.bot.prefix)) return;

		message.parsed = {
			prefix: this.config.bot.prefix,
			args: [],
			command: ''
		};

		message.parsed.args = message.content.slice(message.parsed.prefix.length).split(' ');
		message.parsed.command = message.parsed.args[0];

		if(!this.client.commands[message.parsed.command]) return message.reply("That command doesn't exists.");
		this.client.commands[message.parsed.command].exec(message);
	}
}