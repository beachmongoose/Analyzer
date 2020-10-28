/* eslint-disable no-undef */
module.exports = {
    name: 'calculate',
    description: 'CALCULATES PROBABILITY OF SUCCESS FOR A GIVEN SCENARIO.',
    execute(message, input) {
        console.log("!calculate")
        const request = String(input).replace('calculate','');
        if (request.length <= 1) {
            message.channel.send `NO QUERY PROVIDED.`
            return;
        }
        message.channel.send(`CALCULATED PROBABILITY IS ` + Math.floor(Math.random() * 101) + `%.`)
        return;
    }
}