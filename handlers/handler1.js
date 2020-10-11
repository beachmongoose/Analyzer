/* eslint-disable no-undef */
// For messages that do not start with @ or ! but contain special words/phrases that trigger responses.
module.exports.initialRead = initialRead

const { messageInput, messageAnswer } = require('./commands/json/easterEggs.json')
const { cursedImage } = require('./commands/cursedImageAlert');
const handler2 = require('./handler2')
const methods = require('./commands/helpers/methods')

function initialRead(message) {
    checkDeleteRequest(message)
    checkEasterEggs(message)
    moveToNextHandler(message)
    return;
}

function checkDeleteRequest(message) {
    let text = String(message.content).toLowerCase()
    if (text.includes('delete this') || text.includes('thanks i hate it')) {
        cursedImage(message)
        return;
    }
    return;
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
    if (methods.botMentioned(message)) {
        handler2.askAnalyzer(message)
        return;
    }
    if (message.content.startsWith(methods.prefix)) {
        handler2.toHandlerThree(message);
    }
    return;
}