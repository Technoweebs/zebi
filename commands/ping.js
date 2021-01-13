module.exports = {
	config: {
		name: "ping",
		help: "A basic ping command."
	},
	init: (client) => {	this.client = client },
	exec: (message) => {
		message.channel.send({ embed: {
			description: this.client.ping + "ms",
			color: 4035754,
			author: {
				name: "PONG !"
			}
		}});
	}
}