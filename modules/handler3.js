/* eslint-disable no-undef */
// for messages that start with prefix
const { calculate } = require('./helpers/methods.js')
const { characterFiles } = require('./json/fileURLs.json')

function prefixCommand(message) {
    const input = message.content.slice(prefix.length).trim().split(' ');
    const command = input.shift().toLowerCase();
    switch(command) {
        case 'file':
            accessFile(input, message)
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

    function accessFile(input, message) {
        let query = String(input[0]).toLowerCase()
        console.log()
        for (entry in archiveNames) {
            let name = String(archiveNames[entry])
            if (query === name) {
                let characterFile = characterFiles[name]
                let number = characterFile.length;
                console.log(number)
                let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                message.channel.send (characterFile[imageNumber])
            }
         }
    }