/* eslint-disable no-undef */
const { randomItem } = require('./helpers/methods')
const { memes } = require('./json/fileURLs.json')

module.exports = {
    name: 'meme',
    description: "FORMAT AS: ```!meme```\n POSTS A LEIJIVERSE RELATED MEME.",
    execute(message, input) {
        console.log("!meme")
        respond(message)
        return;
    }
}

async function respond(message) {
    let response = await randomItem(memes)
    message.channel.send(response)
    return;
}