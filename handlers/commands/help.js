/* eslint-disable no-undef */
module.exports = {
    name: 'help',
    description: 'FORMAT AS: ```!help```\nPROVIDES INFORMATION ON AVAILABLE COMMANDS.',
    helpRequest(message) {
        console.log('help accessed')
    }
}