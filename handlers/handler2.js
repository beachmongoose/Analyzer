/* eslint-disable no-undef */
// For messages that start by mentioning bot
module.exports.askAnalyzer = askAnalyzer;
module.exports.cursedImage = cursedImage;
module.exports.toHandlerThree = toHandlerThree;

const methods = require('./commands/helpers/methods');
const handler3 = require('./handler3')
const { statusInput, statusAnswer,
thanksInput, thanksAnswer,
aboutInput, aboutAnswer,
complimentInput
} = require('./commands/json/conversation.json')
const { deleteThis } = require('./commands/json/fileURLs.json')

function askAnalyzer(message) {
    if (methods.botNotInPrefix(message)) {
        message.channel.send `PRESENT.`
    }
    let idCount = methods.getIDCount(message)
    const input = String(message.content.slice(idCount.length).toLowerCase())
    if (input === "") {
        message.channel.send `PRESENT.`
        return
      }
    checkForPhrasesIn(input, message)
    return;
}

function checkForPhrasesIn(input, message) {
    console.log(input)
    if (input === "cursed image alert") {
        cursedImage(message)
    }
    for (entry in statusInput) {
        let keyPhrase = String(statusInput[entry])
        if (input.includes(keyPhrase)) {
            message.channel.send(statusAnswer[entry])
            return;
        }
    }
    for (entry in complimentInput) {
        let keyPhrase = String(complimentInput[entry])
        if (input.includes(keyPhrase)) {
            let name = String(message.author).toUpperCase()
            message.channel.send(`THANK YOU, ` + name + `.`)
            return;
        }
    }
    for (entry in thanksInput) {
        let keyPhrase = String(thanksInput[entry])
        if (input.includes(keyPhrase)) {
            // let name = String(message.author).toUpperCase()
            message.channel.send(methods.randomItem(thanksAnswer))
            return;
        }
    }
    for (entry in aboutInput) {
        let keyPhrase = String(aboutInput[entry])
        if (input.includes(keyPhrase)) {
            message.channel.send(aboutAnswer)
            return;
        }
    }
    if (input.includes('calculate')) {
        methods.calculate(input, message)
        return
    }
    return;
}

function cursedImage(message) {
    let number = deleteThis.length
    let imageNumber = Math.floor(Math.random() * (number -1 + 1)) + 1;
    message.channel.send (deleteThis[imageNumber])
    return;
}

function toHandlerThree(message) {
    handler3.prefixCommand(message)
}
