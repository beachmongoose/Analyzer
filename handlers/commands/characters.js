/* eslint-disable no-undef */
const { seriesList, characterAppearances } = require('./json/seriesGuides.json')


module.exports = {
    name: 'characters',
    description: 'FORMAT AS: ```!characters in SERIES```\nPROVIDES DATA ON WHICH CHARACTERS ARE IN A SPECIFIED SERIES.',
    seriesCharacters(input, message) {
        if (!input.length) {
            return message.channel.send("PLEASE PROVIDE SERIES NAME.")
        }
        let removeIn = input.shift()
        let query = input.join(" ").toLowerCase()
        for (entry in seriesList) {
                let seriesName = String(seriesList[entry])
                if (query === seriesName.toLowerCase()) {
                    series = characterAppearances[seriesName]
                    let characters = series.join(", ")
                    message.channel.send(`CHARACTERS IN ` + seriesName.toUpperCase() + ` INCLUDE: ` + characters.toUpperCase() + `.`)
                    return;
                }
        }
        return;
    }
};