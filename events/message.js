module.exports = {
	name: "message",
	init: (client) => {
		this.client = client;
		this.config = client.config;
	},
	callback: (message) => {
		if(message.author.bot) return;
		if(!message.content.startsWith(this.config.prefix)) return;
		if(!this.client.commands[message.content.split(' ')[0].slice(this.config.prefix.length)]) return message.reply("Unknow command.");

		this.client.commands[message.content.split(' ')[0].slice(this.config.prefix.length)].exec(message);
	}
}