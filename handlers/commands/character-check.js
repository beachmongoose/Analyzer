/* eslint-disable no-undef */
const { properSeriesName, isInSeries, fullNameFor } = require('./helpers/methods')

module.exports = {
    name: 'character-check',
    description: 'FORMAT AS: !character-check CHARACTER in SERIES```\nCONFIRM WHETHER OR NOT A RECYCLED LEIJI CHARACTER APPEARS IN A GIVEN SERIES.',
    characterCheck(input, message) {
        const removeIs = input.shift()
        let joined = input.join(' ')
        let parts = joined.split(" in ")
    
        let character = parts[0]
        let series = parts[1]
    
        let seriesName = properSeriesName(series)
        if (seriesName == "") {
            message.channel.send(`UNKNOWN SERIES.`)
        }
        if (isInSeries(character, seriesName)) {
            let fullName = fullNameFor(character, seriesName)
            let disclaimer = disclaimerDivide(fullName)
             if (disclaimer === "none") {
                 message.channel.send(`AFFIRMATIVE, ` + character.toUpperCase() + ` IS IN ` + seriesName.toUpperCase() + `.`)
                } else {
                message.channel.send(`AFFIRMATIVE, ` + character.toUpperCase() + ` IS IN ` + seriesName.toUpperCase() + ` (`+ disclaimer.toUpperCase() + `).`)
                return;
            }
        } else {
            message.channel.send(`NO, ` + character.toUpperCase() + ` IS NOT IN ` + name.toUpperCase() + `.`)
        }
        return;
    }
}

function disclaimerDivide(fullName) {
    let name = String(fullName)
    if (name.includes("(")) {
        divide = name.split(" (")
        phrase = divide[1]
        cleanDisc = String(phrase.replace(")", ""))
        return cleanDisc;
    }
    return "none";
}