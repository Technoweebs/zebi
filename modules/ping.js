// Ping Module
module.exports = {
	config: { // Some config
		name: "ping",
		enabled: true
	},
	init: (client, config) => { this.client = client; this.config = config; this.cconfig = client.config }, // Variables Initialization
	exec: (message) => { // Execution
		return Date.now() - message.createdTimestamp;
	}
}