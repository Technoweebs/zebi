const Discord = require("discord.js");
const client  = new Discord.Client();
const fs      = require("fs");

client.config = require("./config.json");

fs.readdirSync(`${__dirname}/events/`).filter((file) => /\.js$/.test(file)).forEach((file) => {
	let event = require(`${__dirname}/events/${file}`);
	event.init(client);
	client.on(event.name, event.callback);
});

client.login(client.config.token);