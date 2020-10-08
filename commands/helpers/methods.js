/* eslint-disable no-undef */

module.exports.randomItem = randomItem;
module.exports.getIDCount = getIDCount;
module.exports.botMentioned = botMentioned;
module.exports.calculate = calculate;
module.exports.botNotInPrefix = botNotInPrefix;

const { botID, botNicknameID, prefix } = require('/Users/maggie/Development/Javascript/Analyzer/config.json')
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
    console.log(request)
    if (request.length <= 1) {
        message.channel.send `NO QUERY PROVIDED.`
        return;
    }
    message.channel.send(`CALCULATED PROBABILITY IS ` + Math.floor(Math.random() * 101) + `%.`)
    return;
}