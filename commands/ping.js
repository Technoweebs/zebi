module.exports = {
	name: "ping",
	init: (client) => {
		this.client = client;
		this.config = this.client.config;
	},
	exec: (message) => {
		message.reply("PINGASS");
	}
}