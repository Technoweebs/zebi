// Modules
const Discord = require("discord.js");
const client  = new Discord.Client();
const fs      = require("fs");

// Variables
client.config   = require("./config.json");
client.commands =
client.events   =
client.modules  = {};

// Commands
fs.readdirSync(`${__dirname}/commands/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	let command = require(`${__dirname}/commands/${file}`);
	if(!command.config.enabled) return;

	client.commands[command.config.name] = command;
});

// Events
fs.readdirSync(`${__dirname}/events/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	// Do some tests and register the event
});

// Modules
fs.readdirSync(`${__dirname}/modules/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	// Do some tests and register the module
});

client.login(client.config.token);