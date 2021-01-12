module.exports = {
	name: "ready",
	init: (client) => {
		this.client = client;
		this.config = client.config;
	},
	callback: () => {
		console.log("I'M READY FOR UR LITTLE bababooey");
		if(this.config.activity.type.toUpperCase() != "NONE") this.client.user.setActivity(this.config.activity.content, { type: this.config.activity.type.toUpperCase() });
	}
}