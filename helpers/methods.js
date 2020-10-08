const { botID, botNicknameID } = require('./config.json')

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