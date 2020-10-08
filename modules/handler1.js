/* eslint-disable no-undef */
// For messages that do not start with @ or ! but contain special words/phrases that trigger responses.
const { messageInput, messageAnswer } = require('./easterEggs.json')
const { cursedImage, toHandlerThree } = require('./modules/handler2.js')
const { botMentioned } = require('./helpers/methods.js')

export function initialRead(message) {
    checkDeleteRequest(message)
    checkEasterEggs(message)

    moveToNextHandler(message)
}

function checkDeleteRequest(message) {
    let text = String(message.content).toLowerCase()
    if (text.includes('delete this') || text.includes('thanks i hate it')) {
        cursedImage(message)
        return;
    }
}

function checkEasterEggs(message) {
    let text = String(message.content).toLowerCase()
    for (entry in messageInput) {
        let keyPhrase = String(messageInput[entry])
        if (text.includes(keyPhrase)) {
            message.channel.send(messageAnswer[entry])
            return;
        }
    }
}

function moveToNextHandler(message) {
    if (botMentioned(message) === true) {
        askAnalyzer(message)
    }
    if (message.content.startsWith(prefix)) {
        toHandlerThree(message);
    }
    return;
}