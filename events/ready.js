module.exports = {
	config: {
		name: "ready",
		enabled: true
	},
	init: (client) => {	this.client = client; this.config = client.config },
	callback: () => {
		console.log(`[#] Logged in as ${this.client.user.username}#${this.client.user.tag} !`);
	}
}