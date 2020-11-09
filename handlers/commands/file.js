/* eslint-disable no-undef */
const { randomItem } = require('./helpers/methods')
const { characterFiles, characterNames } = require('./json/fileURLs.json')

module.exports = {
    name: 'file',
    description: 'FORMAT AS: ```!file CHARACTER NAME```\nPROVIDES A RANDOM FILE FROM RECORDS PERTAINING TO THE SPECIFIED CHARACTER. MESSAGE ```!file list``` FOR AVAILABLE CHARACTERS.',
    execute(message, input) {
        let query = String(input[0]).toLowerCase()
        if (query === "list") {
            let characters = characterNames.join("\n")
            message.channel.send('AVAILABLE RECORDS: ```\n' + characters.toUpperCase() + '```')
        }
        for (entry in characterNames) {
            let name = String(characterNames[entry])
            if (name.includes(query)) {
                let array = characterFiles[name]
                respond(array, message)
                return;
            }
        }
        return;
    }
}

async function respond(array, message) {
    let response = await randomItem(array)
    message.channel.send(response)
    return;
}