/* eslint-disable no-undef */
// For messages that start by mentioning bot
const { botID, botNicknameID,
statusInput, statusAnswer,
stockCompliments,
stockThanks, stockThanksReturn,
aboutInput, aboutAnswer
} = require('./json/conversation.json')
const { prefixCommand } = require('./modules/handler3.js')
const { getIDCount, calculate } = require('./helpers/methods.js')

function askAnalyzer(message) {
    if (!message.content.startsWith(botID) && (!message.content.startsWith(botNicknameID))) {
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
    for (entry in statusInput) {
        let keyPhrase = String(statusInput[entry])
        if (input.includes(keyPhrase)) {
            message.channel.send(statusAnswer[entry])
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
    for (entry in aboutInput) {
        let keyPhrase = String(aboutInput[entry])
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
    let imageNumber = Math.floor(Math.random() * (number -1 + 1)) + 1;
    message.channel.send (deleteThis[imageNumber])
    return;
}

function toHandlerThree(message) {
    prefixCommand(message)
}
