/* eslint-disable no-undef */
const Discord = require('discord.js');
import { initialRead } from './modules/handler1.js'
const client = new Discord.Client();

client.once('ready', () => {
	console.log('online');
});

client.on('message', (message) => {
    if (message.author.bot) {
         return; }
    initialRead(message)
});

client.login(token)