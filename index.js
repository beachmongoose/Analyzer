/* eslint-disable no-undef */
const Discord = require('discord.js');
const { prefix, token, botID,
    stockQueries, stockAnswers,
    stockThanks, stockCompliments,
    stockThanksReturn,
    archiveNames,
    aboutQuery, aboutAnswer } = require('./config.json')
const { characterFiles, deleteThis } = require('./fileURLs.json')
const client = new Discord.Client();

client.once('ready', () => {
	console.log('online');
});

client.on('message', (message) => {
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

function calculate(input, message) {
    const request = String(input).replace('calculate','');
    console.log(request)
    if (request.length <= 1) {
        message.channel.send `NO QUERY PROVIDED.`
        return;
    }
    message.channel.send(`CALCULATED PROBABILITY IS ` + Math.floor(Math.random() * 101) + `%.`)
    return;
}

function askAnalyzer(message) {
    if (!message.content.startsWith(botID) && (!message.content.startsWith(`<@!539521677227327499>`))) {
        return message.channel.send `PRESENT.`
    }
    let idCount = getIDCount(message)
    const input = String(message.content.slice(idCount.length).toLowerCase())
    if (input === "") {
        message.channel.send `PRESENT.`
        return
      }
    checkForPhrasesIn(input, message)
}

function checkForPhrasesIn(input, message) {
    if (input === "cursed image alert") {
        cursedImage(message)
    }
    for (entry in stockQueries) {
        let keyPhrase = String(stockQueries[entry])
        if (input.includes(keyPhrase)) {
            message.channel.send(stockAnswers[entry])
            return;
        }
    }
    for (entry in stockCompliments) {
        let keyPhrase = String(stockCompliments[entry])
        if (input.includes(keyPhrase)) {
            let name = String(message.author).toUpperCase()
            message.channel.send(`THANK YOU, ` + name + `.`)
            return;
        }
    }
    for (entry in stockThanks) {
        let keyPhrase = String(stockThanks[entry])
        if (input.includes(keyPhrase)) {
            // let name = String(message.author).toUpperCase()
            message.channel.send(randomItem(stockThanksReturn))
            return;
        }
    }
    for (entry in aboutQuery) {
        let keyPhrase = String(aboutQuery[entry])
        if (input.includes(keyPhrase)) {
            message.channel.send(aboutAnswer)
            return;
        }
    }
    if (input.includes('calculate')) {
        calculate(input, message)
        return
    }
}

function cursedImage(message) {
    let number = deleteThis.length
    console.log(number)
    let imageNumber = Math.floor(Math.random() * (number -1 + 1)) + 1;
    message.channel.send (deleteThis[imageNumber])
    return;
}

function botMentioned(message) {
    const text = String(message.content)
    if (text.includes `<@!539521677227327499>` || text.includes(botID)) {
        return true
    } else {
        return false
    }
}

function getIDCount(message) {
    let text = String(message.content)
    if (text.includes `<@!539521677227327499>`) {
        return `<@!539521677227327499> `
    } else {
        return `<@539521677227327499> `
    }
}

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

client.login(token)