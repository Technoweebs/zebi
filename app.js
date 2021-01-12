const Discord = require("discord.js");
const client  = new Discord.Client();
client.config = require("./config.json");



client.login(client.config.token);