/* eslint-disable no-undef */
// For messages that start by mentioning bot
module.exports.askAnalyzer = askAnalyzer;
module.exports.toHandlerThree = toHandlerThree;

const { botNotInPrefix, isInArray, getIDCount, randomItem } = require('./commands/helpers/methods');
const handler3 = require('./handler3')
const { statusInput, statusAnswer,
thanksInput, thanksAnswer,
aboutInput, aboutAnswer,
complimentInput, greetingInput
} = require('./commands/json/conversation.json')
const { cursedImage } = require('./commands/cursedImageAlert');
const { execute } = require('./commands/calculate')

function askAnalyzer(message) {
    if (botNotInPrefix(message)) {
        message.channel.send `PRESENT.`
    }
    let idCount = getIDCount(message)
    const input = String(message.content.slice(idCount.length).toLowerCase())
    if (input === "") {
        message.channel.send `PRESENT.`
        return;
      }
    checkForPhrasesIn(input, message)
    return;
}

function checkForPhrasesIn(input, message) {
    if (input === "cursed image alert") {
        cursedImage(message)
    }

    if (input.includes('calculate')) {
        execute(message, input)
        return;
    }

    if (isInArray(input, statusInput)) {
        message.channel.send(statusAnswer[entry])
        return;
    }

    let name = userNickname(message)
    if (isInArray(input, complimentInput)) {
        message.channel.send(`THANK YOU, ` + name + `.`)
        return;
    }

    if (isInArray(input, thanksInput)) {
        message.channel.send(randomItem(thanksAnswer) + name + ".")
        return;
    }

    if (isInArray(input, greetingInput)) {
        message.channel.send("HELLO, " + name + ".")
        return;
    }

    if (isInArray(input, aboutInput)) {
        message.channel.send(aboutAnswer)
        return;
    }

    return;
}

function toHandlerThree(message) {
    handler3.prefixCommand(message)
}

function userNickname(message) {
    return String(message.member.displayName).toUpperCase()
}