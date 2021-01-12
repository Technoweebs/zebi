const Discord = require("discord.js");
const client  = new Discord.Client();
const fs      = require("fs");

client.config   = require("./config.json");
client.commands = {};
client.models   = {};

fs.readdirSync(`${__dirname}/events/`).filter((file) => /\.js$/.test(file)).forEach((file) => {
	let event = require(`${__dirname}/events/${file}`);
	event.init(client);
	client.on(event.name, event.callback);
});

fs.readdirSync(`${__dirname}/commands/`).filter((file) => /\.js$/.test(file)).forEach((file) => {
	let command = require(`${__dirname}/commands/${file}`);
	command.init(client);
	client.commands[command.name] = command;
});

fs.readdirSync(`${__dirname}/models/`).filter((file) => /\.js$/.test(file)).forEach((file) => {
	if(!client.config[file.split('.')[0]].enabled) return;
	client.models[file.split('.')[0]] = new (require(`${__dirname}/models/${file}`))(client, client.config[file.split('.')[0]]);
});

client.login(client.config.token);