/* eslint-disable no-undef */
const methods = require('./helpers/methods')

module.exports = {
    name: "content-warning",
    description: "FORMAT AS: ```!content-warning SERIES NAME```\nPROVIDES CONTENT WARNINGS FOR SPECIFIED SERIES.",
    contentWarning(input, message) {
        if (!input.length) {
            return message.channel.send("PLEASE PROVIDE SERIES NAME.")
        }
        let submittedName = input.join(" ")
        let seriesName = methods.properSeriesName(submittedName)
        if (seriesName == "") {
            message.channel.send(`UNKNOWN SERIES.`)
        }
        let warnings = contentWarnings[seriesName]
        message.channel.send(`CONTENT WARNINGS IN ` + seriesName.toUpperCase() + ` INCLUDE: ||` + warnings.toUpperCase() + `.||`)
    }
}