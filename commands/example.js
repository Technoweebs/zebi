module.exports = {
	config: {
		name: "example",
		help: "An example command."
	},
	init: (client) => {	this.client = client },
	exec: (message) => {
		message.reply("Example command triggered.");
	}
}