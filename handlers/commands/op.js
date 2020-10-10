/* eslint-disable no-undef */
const methods = require('./helpers/methods')
const { seriesOPs } = require('./json/seriesGuides.json')

module.exports = {
    name: 'op',
    description: 'POSTS A LINK TO THE OPENING OF THE REQUESTED SERIES.',
    execute(message, input) {
        let series = input.join(" ")
        let seriesName = methods.checkAlias(series)
        if (seriesName == "") {
            message.channel.send('UNKNOWN / INCORRECTLY FORMATTED SERIES.')
            return;
        }
        if (!(seriesName in seriesOPs)) {
            message.channel.send('MEDIA DOES NOT HAVE AN OP.')
            return;
        }
        let opLink = seriesOPs[seriesName]
        message.channel.send(opLink)
        return;
    }
}