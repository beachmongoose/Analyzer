/* eslint-disable no-undef */
const Discord = require('discord.js');
const { token } = require('./config.json')
const handler1 = require('./commands/handler1.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('online');
});

client.on('message', (message) => {
    if (message.author.bot) {
         return; }
    
    try {
        handler1.execute(message);
    } catch {
        console.error(error);
        message.reply('unable to move to handler')
    }
});

client.login(token)