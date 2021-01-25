// Ready Event
module.exports = {
	config: { // Some config
		name: "ready",
		enabled: true
	},
	init: (client) => {	this.client = client; this.config = client.config }, // Variables Initialization
	callback: () => { // Event Callback
		console.log(`[#] Logged in as ${this.client.user.tag} !`);
		
		this.client.user.setStatus(this.config.bot.presence.status.toLowerCase());
		this.client.modules.activity.exec(this.config.bot.presence.games.activities, this.config.bot.presence.games.interval);
	}
}