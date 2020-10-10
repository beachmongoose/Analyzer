/* eslint-disable no-undef */
const { seriesList } = require('./json/seriesGuides.json')

module.exports = {
    name: 'all',
    description: 'FORMAT AS: ```!all series```\nPROVIDES A LIST OF ALL LEIJI MATSUMOTO SERIES WITHIN THE DATABASE',
    execute(message, input) {
    let series = seriesList.join("\n")
    message.channel.send('LIST OF ALL LEIJI MATSUMOTO SERIES IN DATABASE:```' + series.toUpperCase() + '```' )
    return;
    }
}