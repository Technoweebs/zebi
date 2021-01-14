module.exports = {
	config: {
		name: "ping",
		enabled: true
	},
	init: (client, config) => { this.client = client, this.config = config },
	exec: (message) => {
		return Date.now() - message.createdTimestamp;
	}
}