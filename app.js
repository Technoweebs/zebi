// Modules
const Discord = require("discord.js");
const client  = new Discord.Client();
const fs      = require("fs");

// Variables
client.config   = require("./config.json");
client.commands = {};
client.events   = {};
client.modules  = {};

// Commands
fs.readdirSync(`${__dirname}/commands/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	let command = require(`${__dirname}/commands/${file}`);
	if(!command.config.enabled) return;

	command.init(client);

	client.commands[command.config.name] = command;
});

// Events
fs.readdirSync(`${__dirname}/events/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	let event = require(`${__dirname}/events/${file}`);
	if(!event.config.enabled) return;

	event.init(client);

	client.events[event.config.name] = event;
	client.on(event.config.name, event.callback);
});

// Modules
fs.readdirSync(`${__dirname}/modules/`).filter((file) => /\.js$/.test(file))
.forEach((file) => {
	let _module = require(`${__dirname}/modules/${file}`);
	if(!_module.config.enabled) return;

	_module.init(client, client.config.modules[_module.config.name] ? client.config.module[_module.config.name] : {});

	client.modules[_module.config.name] = _module;
});

// Login
client.login(client.config.bot.token);