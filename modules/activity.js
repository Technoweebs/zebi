// Activity Module
module.exports = {
	config: { // Some config
		name: "activity",
		enabled: true
	},
	init: (client, config) => { this.client = client; this.config = config; this.cconfig = client.config }, // Variables Initialization
	exec: (activities, interval) => { // Execution
		return new Promise(() => {
			this.client.user.setActivity(activities[0].content, { type: activities[0].type.toUpperCase() });
			
			let i = 1;
			let max = activities.length - 1;
			
			setInterval(() => {
				if(i > max) i = 0;
				this.client.user.setActivity(activities[i].content, { type: activities[i].type.toUpperCase() });
				i++;
			}, interval);
		});
	}
}