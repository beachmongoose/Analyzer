/* eslint-disable no-undef */
const Discord = require('discord.js');
const { token } = require('./config.json')
const handler1 = require(`./handlers/handler1`);
const client = new Discord.Client();


client.once('ready', () => {
	console.log('online');
});

client.on('message', (message) => {
    if (message.author.bot) {
         return; }
    
    try {
        handler1.initialRead(message)
    } catch {
        console.log('unable to move to handler1')
        console.error(error);
    }
});

client.login(token)