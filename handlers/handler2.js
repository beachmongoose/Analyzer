/* eslint-disable no-undef */
// For messages that start by mentioning bot
module.exports.askAnalyzer = askAnalyzer;
module.exports.toHandlerThree = toHandlerThree;

const { botNotInPrefix, isInArray, getIDCount, randomItem } = require('./commands/helpers/methods');
const handler3 = require('./handler3')
const { aboutInput, aboutAnswer,
    complimentInput, greetingInput,
    statusInput, statusAnswer,
    thanksInput, thanksAnswer
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
    if (input.includes('calculate')) {
        execute(message, input)
        return;
    }

    if (input === "cursed image alert") {
        cursedImage(message)
        return;
    }

    checkMentions(input, message)
    return;
}

function checkMentions(input, message) {
    let index = checkMentionInput(input)
    if (index == null){
        return;
    }

    let name = userNickname(message)
    switch(index) {
        case "0":
            message.channel.send(aboutAnswer)
            break;
        case "1":
            message.channel.send(`THANK YOU, ` + name + `.`)
            break;
        case "2":
            message.channel.send("HELLO, " + name + ".")
            break;
        case "3":
            message.channel.send(randomItem(statusAnswer))
            break;
        case "4":
            message.channel.send(randomItem(thanksAnswer) + name + ".")
            break;
    }
    return;
}

function checkMentionInput(input) {
    let userInputs = [aboutInput, complimentInput, greetingInput, statusInput, thanksInput]
    for (index in userInputs) {
        let array = userInputs[index]
        if (isInArray(input, array)) {
            return index
        }
    }
}

function toHandlerThree(message) {
    handler3.prefixCommand(message)
}

function userNickname(message) {
    return String(message.member.displayName).toUpperCase()
}