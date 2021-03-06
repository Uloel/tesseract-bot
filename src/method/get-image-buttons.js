const Markup = require('telegraf/markup')


const makeButtons = (buttons) => buttons
  .map((text) => Markup.callbackButton(text, `!menu=${text.toLowerCase()}`))

const getImageButtons = () => makeButtons(['Langs', 'Options', 'Recognize'])

module.exports = getImageButtons
