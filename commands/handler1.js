/* eslint-disable no-undef */
// For messages that do not start with @ or ! but contain special words/phrases that trigger responses.
module.exports = {
    name: 'handler1',
    description: 'handler1',
    execute(message) {
        initialRead(message)
    }
}
const { messageInput, messageAnswer } = require('./json/easterEggs.json')
const handler2 = require('./handler2.js');
const methods = require('./helpers/methods')

function initialRead(message) {
    checkDeleteRequest(message)
    checkEasterEggs(message)

    moveToNextHandler(message)
}

function checkDeleteRequest(message) {
    let text = String(message.content).toLowerCase()
    if (text.includes('delete this') || text.includes('thanks i hate it')) {
        handler2.cursedImage(message)
        return;
    }
}

function checkEasterEggs(message) {
    console.log('easter eggs')
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
    }
    if (message.content.startsWith(methods.prefix)) {
        handler2.toHandlerThree(message);
    }
    return;
}