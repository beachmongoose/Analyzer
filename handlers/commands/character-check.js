/* eslint-disable no-undef */
const { checkAlias, isInSeries, fullNameFor } = require('./helpers/methods')

module.exports = {
    name: 'character-check',
    description: 'FORMAT AS: !character-check is CHARACTER in SERIES```\nCONFIRM WHETHER OR NOT A RECYCLED LEIJI CHARACTER APPEARS IN A GIVEN SERIES.',
    execute(message, input) {
        let is = String(input[0])
        if (!is.includes("is")) {
            message.channel.send("INCORRECT FORMAT. CORRECT FORMAT:\n```!character-check is CHARACTER in SERIES```")
            return;
        }
        const removeIs = input.shift()
        let joined = input.join(' ')
        let parts = joined.split(" in ")
    
        let character = String(parts[0])
        let series = String(parts[1])
        console.log(series)
        let seriesName = checkAlias(series)
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