/* eslint-disable no-undef */
const { memes } = require('./json/fileURLs.json')

module.exports = {
    name: 'meme',
    description: "FORMAT AS: ```!meme```\n POSTS A LEIJIVERSE RELATED MEME.",
    execute(message, input) {
        console.log("!meme")
        let number = memes.length
        let imageNumber = Math.floor(Math.random() * (number -1 + 1)) + 1;
        message.channel.send (memes[imageNumber])
        return;
    }
}