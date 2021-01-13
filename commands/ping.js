module.exports = {
	config: {
		name: "ping",
		help: "A basic ping command.",
		enabled: true
	},
	init: (client) => {	this.client = client },
	exec: (message) => {
		message.channel.send({ embed: {
			description: "33ms",
			color: 4035754,
			author: {
				name: "PONG !"
			}
		}});
	}
}