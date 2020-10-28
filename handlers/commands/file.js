/* eslint-disable no-undef */
const { characterFiles, characterNames } = require('./json/fileURLs.json')

module.exports = {
    name: 'file',
    description: 'FORMAT AS: ```!file CHARACTER NAME```\nPROVIDES A RANDOM FILE FROM RECORDS PERTAINING TO THE SPECIFIED CHARACTER. MESSAGE ```!file list``` FOR AVAILABLE CHARACTERS.',
    execute(message, input) {
        let query = String(input[0]).toLowerCase()
        if (query === "list") {
            let characters = characterNames.join("\n")
            message.channel.send('AVAILABLE RECORDS: ```' + characters.toUpperCase() + '```')
        }
        for (entry in characterNames) {
            let name = String(characterNames[entry])
            if (name.includes(query)) {
                let characterFile = characterFiles[name]
                let number = characterFile.length;
                let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                console.log("!file")
                message.channel.send (characterFile[imageNumber])
                return;
            }
        }
        return;
    }
}