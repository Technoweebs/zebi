// Ready Event
module.exports = {
	config: { // Some config
		name: "ready",
		enabled: true
	},
	init: (client) => {	this.client = client; this.config = client.config }, // Variables Initialization
	callback: () => { // Event Callback
		console.log(`[#] Logged in as ${this.client.user.tag} !`);
	}
}