const Discord = require('discord.js');
const { prefix, token, botID } = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('online');
});

client.on('message', (message) => {
    console.log(message.content)
     if (message.author.bot) {
         return; }
    if (botMentioned(message) === true) {
        askAnalyzer(message)
    }
     if (message.content.startsWith(prefix)) {
        prefixCommand(message);
    }
    return;
});

function prefixCommand(message) {
    const input = message.content.slice(prefix.length).toLowerCase()
    const command = input.shift().toLowerCase();
    switch(command) {
        case 'file':
            console.log('file')
            break;
        case 'calculate':
            calculate(input, message)
            break;
        case 'help':
            console.log('help')
            break;
        case 'args-info':
            if (!input.length) {
            return message.channel.send("No arguments")
            }
            console.log(input)
            console.log(command)
            message.channel.send(`Command name: ${command}\nArguments: ${input}`);
            break;
        default:
            console.log('no input.')
    }
    }

function calculate(input, message) {
    const request = input.replace('calculate','');
    console.log(request)
    if (!request.length) {
        message.channel.send `NO QUERY PROVIDED.`
        return;
    }
    message.channel.send(`CALCULATED PROBABILITY IS ` + Math.floor(Math.random() * 101) + `%`)
}

function askAnalyzer(message) {
    if (!message.content.startsWith(botID)) {
        return message.channel.send `PRESENT.`
    }
    const input = String(message.content.slice(botID.length).toLowerCase())
    console.log(input)

    if (input.includes('calculate')) {
        calculate(input, message)
        return
    }
}

function botMentioned(message) {
    const text = String(message.content)
    if (text.includes `<@!539521677227327499>` || text.includes(botID)) {
        return true
    } else {
        return false
    }
}

client.login(token)