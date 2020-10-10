/* eslint-disable no-undef */
// for messages that start with prefix
module.exports.prefixCommand = prefixCommand
const methods = require('./commands/helpers/methods')

const fs = require('fs');
let commandList = new Map()
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(__dirname + `/commands/${file}`);
    commandList.set(command.name, command)
}

function prefixCommand(message) {
    const input = message.content.slice(methods.prefix.length).trim().split(' ');
    const command = String(input.shift().toLowerCase());
    if (commandList.get(command) === undefined ) {
        return;
    }
    try {
        commandList.get(command).execute(message, input);
    } catch (error) {
        console.error(error);
        console.log("made it to handler 3 but crashed")
    }
}