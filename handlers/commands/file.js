/* eslint-disable no-undef */
const { characterFiles, characterNames } = require('./json/fileURLs.json')

module.exports = {
    name: 'file',
    description: 'FORMAT AS: ```!file CHARACTER NAME```\nPROVIDES A RANDOM FILE FROM RECORDS PERTAINING TO THE SPECIFIED CHARACTER.',
    accessFile(input, message) {
        let query = String(input[0]).toLowerCase()
        for (entry in characterNames) {
            let name = String(characterNames[entry])
            if (name.includes(query)) {
                let characterFile = characterFiles[name]
                let number = characterFile.length;
                let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
                message.channel.send (characterFile[imageNumber])
                return;
            }
        }
        return;
    }
}