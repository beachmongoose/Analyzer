/* eslint-disable no-undef */
// for messages that start with prefix
module.exports.prefixCommand = prefixCommand

const fs = require('fs');
let commandList = new Map()
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(__dirname + `/commands/${file}`);
    commandList.set(command.name, command)
}

function prefixCommand(message) {
    const input = message.content.slice(methods.prefix.length).trim().split(' ');
    const command = input.shift().toLowerCase();
    switch(command) {
        case 'calculate':
            methods.calculate(input, message)
            break;
        case 'characters':
            commandList.get('characters').seriesCharacters(input, message)
            break;
        case 'character-check':
            commandList.get('character-check').characterCheck(input, message)
            break;
        case 'content-warning':
            commandList.get('content-warning').contentWarning(input, message)
            break;
        case 'file':
            commandList.get('file').accessFile(input, message)
            break;
        case 'help':
            commandList.get('help').helpRequest(message)
            break;
        default:
            break;
    }
}