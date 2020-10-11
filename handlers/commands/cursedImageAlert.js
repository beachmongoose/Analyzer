/* eslint-disable no-undef */
const { deleteThis } = require('./json/fileURLs.json')

module.exports = {
    name: 'cursedImageAlert',
    description: "FORMAT AS: ```@Analyzer cursed image alert or delete this```\nPROVIDES A REQUEST FOR THE DELETION OF A PREVIOUS POST.",
    cursedImage(message) {
        console.log("reached cursed image alert")
        let number = deleteThis.length
        let imageNumber = Math.floor(Math.random() * (number -1 + 1)) + 1;
        message.channel.send (deleteThis[imageNumber])
        return;
    }
}