module.exports = {
	config: {
		name: "ping",
		help: "A basic ping command.",
		enabled: true
	},
	init: (client) => { this.client = client; },
	exec: (message) => {
		message.channel.send({ embed: {
			description: this.client.modules.ping.exec(message) + "ms",
			color: 4035754,
			author: {
				name: "PONG !"
			}
		}});
	}
}