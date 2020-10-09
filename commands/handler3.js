/* eslint-disable no-undef */
// for messages that start with prefix
module.exports.prefixCommand = prefixCommand
const methods = require('./helpers/methods.js')
const { characterFiles, characterNames } = require('./json/fileURLs.json')
const { seriesList, characterAppearances, contentWarnings } = require('./json/seriesGuides.json')

function prefixCommand(message) {
    const input = message.content.slice(methods.prefix.length).trim().split(' ');
    const command = input.shift().toLowerCase();
    switch(command) {
        case 'calculate':
            methods.calculate(input, message)
            break;
        case 'characters':
            seriesCharacters(input, message)
            break;
        case 'character-check':
             characterCheck(input, message)
             break;
        case 'content-warning':
            contentWarning(input, message)
            break;
        case 'file':
            accessFile(input, message)
            break;
        case 'help':
            console.log('help')
            break;
        default:
            console.log('no input.')
    }
}

function seriesCharacters(input, message) {
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

function accessFile(input, message) {
    let query = String(input[0]).toLowerCase()
    for (entry in characterNames) {
        let name = String(characterNames[entry])
        if (query === name) {
            let characterFile = characterFiles[name]
            let number = characterFile.length;
            let imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            message.channel.send (characterFile[imageNumber])
            return;
            }
         }
    }

function contentWarning(input, message) {
    if (!input.length) {
        return message.channel.send("PLEASE PROVIDE SERIES NAME.")
    }
    let submittedName = input.join(" ")
    let seriesName = properSeriesName(submittedName)
    if (seriesName == "") {
        message.channel.send(`UNKNOWN SERIES.`)
    }
    let warnings = contentWarnings[seriesName]
    message.channel.send(`CONTENT WARNINGS IN ` + seriesName.toUpperCase() + ` INCLUDE: ||` + warnings.toUpperCase() + `.||`)
}

function characterCheck(input, message) {
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

function properSeriesName(name) {
    for (entry in seriesList) {
        let series = seriesList[entry]
        if (series.toLowerCase() === name.toLowerCase()) {
            return series
        }
     }
    return ""
}

function isInSeries(character, series) {
    if ( series == "" ) { return false }
        let array = characterAppearances[series]
        for (entry in array) {
            let name = String(array[entry]).toLowerCase()
            if (name.includes(character.toLowerCase())) {
            return true
        }
    }
    return false
}

function fullNameFor(character, series) {
    let array = characterAppearances[series]
    for (entry in array) {
        let name = String(array[entry]).toLowerCase()
        if (name.includes(character.toLowerCase())) {
            return name
        }
    }
    return character
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