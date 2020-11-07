/* eslint-disable no-undef */
const { randomItem } = require('./helpers/methods')
const { deleteAnswer } = require('./json/botAnswers.json')

module.exports = {
    name: 'cursedImageAlert',
    description: "FORMAT AS: ```@Analyzer cursed image alert or delete this```\nPROVIDES A REQUEST FOR THE DELETION OF A PREVIOUS POST.",
    cursedImage(message) {
        console.log("cursedImageAlert")
        execute(message)
        return;
    }
}

async function execute(message) {
    let response = await randomItem(deleteAnswer)
    message.channel.send(response)
    return;
}