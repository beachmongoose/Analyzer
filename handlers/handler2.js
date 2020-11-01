/* eslint-disable no-undef */
// For messages that start by mentioning bot
module.exports.askAnalyzer = askAnalyzer;
module.exports.toHandlerThree = toHandlerThree;

const { botNotInPrefix, isInArray, getIDCount, randomItem } = require('./commands/helpers/methods');
const handler3 = require('./handler3')
const userInputs = require('./commands/json/userInputs.json')
const botAnswers = require('./commands/json/botAnswers.json')
const { cursedImage } = require('./commands/cursedImageAlert');
const { execute } = require('./commands/calculate')

function askAnalyzer(message) {
    if (botNotInPrefix(message)) {
        message.channel.send `Yeah?`
    }
    let idCount = getIDCount(message)
    const input = String(message.content.slice(idCount.length).toLowerCase())
    if (input === "") {
        message.channel.send `Yeah?`
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

async function checkMentions(input, message) {
    let key = await checkMentionInput(input)
    if (key == null){
        return;
    }
    console.log(`responding with ${key}`)
    let answers = botAnswers[key]
    let response = await randomItem(answers)

    if (response.endsWith(" ")) {
        let name = await userNickname(message)
        message.channel.send(response + `${name}`)
        return;
    }
    message.channel.send(response)
    return;
}

function checkMentionInput(input) {
    return new Promise(resolve => {
        for (var key in userInputs) {
            let array = userInputs[key]
            if (isInArray(input, array)) {
                let answer = key.replace("Input", "Answer")
                resolve(answer)
                return;
            }
        }
        resolve(null)
    })
}

function toHandlerThree(message) {
    handler3.prefixCommand(message)
}

function userNickname(message) {
    return new Promise(resolve => {
        resolve(String(message.member.displayName))
    })
}