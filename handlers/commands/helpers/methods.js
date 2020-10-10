/* eslint-disable no-undef */

module.exports.randomItem = randomItem;
module.exports.getIDCount = getIDCount;
module.exports.botMentioned = botMentioned;
module.exports.calculate = calculate;
module.exports.botNotInPrefix = botNotInPrefix;
module.exports.properSeriesName = properSeriesName;
module.exports.isInSeries = isInSeries;
module.exports.fullNameFor = fullNameFor;
module.exports.checkAlias = checkAlias;

const { seriesList, characterAppearances } = require('../json/seriesGuides.json')
const { botID, botNicknameID, prefix } = require('/Users/maggie/Development/Javascript/Analyzer/config.json')
const { seriesAliases } = require('../json/seriesAliases')
module.exports.prefix = prefix;

function randomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
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

function calculate(input, message) {
    const request = String(input).replace('calculate','');
    if (request.length <= 1) {
        message.channel.send `NO QUERY PROVIDED.`
        return;
    }
    message.channel.send(`CALCULATED PROBABILITY IS ` + Math.floor(Math.random() * 101) + `%.`)
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