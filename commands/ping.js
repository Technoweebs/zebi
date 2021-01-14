// Ping Command
module.exports = {
	config: { // Some config
		name: "ping",
		help: "A basic ping command.",
		enabled: true
	},
	init: (client) => { this.client = client }, // Variables Initialization
	exec: (message) => { // Execution
		message.channel.send({ embed: { // Basic embed
			description: this.client.modules.ping.exec(message) + "ms", // Ping check
			color: 4035754,
			author: {
				name: "PONG !"
			}
		}});
	}
}