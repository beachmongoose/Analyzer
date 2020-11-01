/* eslint-disable no-undef */

var path = require('path');
var appDir = path.dirname(require.main.filename);

module.exports.randomItem = randomItem;
module.exports.getIDCount = getIDCount;
module.exports.botMentioned = botMentioned;
module.exports.botNotInPrefix = botNotInPrefix;
module.exports.isInSeries = isInSeries;
module.exports.fullNameFor = fullNameFor;
module.exports.checkAlias = checkAlias;
module.exports.isInArray = isInArray;

const { characterAppearances } = require('../json/seriesGuides.json')
const { botID, botNicknameID, prefix } = require(appDir + '/config.json')
const { seriesAliases } = require('../json/seriesAliases')
module.exports.prefix = prefix;

function randomItem(items) {
    return new Promise(resolve => {
        let message = items[Math.floor(Math.random()*items.length)]
        console.log(message)
        resolve(message)
    })
}

function getIDCount(message) {
    let text = String(message.content)
    if (text.includes(botNicknameID)) {
        return `<@!539521677227327499> `
    } else {
        return `<@539521677227327499> `
    }
}

function botMentioned(message) {
    const text = String(message.content)
    return (text.includes(botNicknameID) || text.includes(botID)) ? true : false
}

function botNotInPrefix(message) {
    const text = String(message.content)
    return (!text.startsWith(botID) && (!text.startsWith(botNicknameID)))
}

function checkAlias(name) {
    for (entry in seriesAliases) {
        let series = seriesAliases[entry]
        let seriesName = series.name
        let aliasList = series.aliases
        for (index in aliasList) {
            let alias = aliasList[index]
            if (name.includes(alias)) {
                return seriesName;
            }
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

function isInArray(input, array) {
    for (entry in array) {
        let keyPhrase = String(array[entry])
        if (input.includes(keyPhrase)) {
            return true
        }
    }
    return false
}