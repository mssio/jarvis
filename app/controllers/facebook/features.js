/* eslint-disable brace-style */
/* eslint-disable camelcase */

module.exports = function (controller) {

  controller.hears(['tell me about your features', 'what can you do'], 'message_received', function (bot, message) {
    bot.reply(message, 'Sorry, no features have been implemented yet right now!');
  })

  controller.hears(['tell me about your future', 'what is your plan'], 'message_received', function (bot, message) {
    var rows = [
      "Here is currently my planned features:",
      "",
      "1. User storage function (I will be able to remember your name and any other additional information about you can be stored on my brain if I find it necessary).",
      "2. Uber surge function (I will remember place of your choice and give you information about Uber Surge price on that place).",
      "3. Debt reminder (I will remember name of your friend, and list of debt owed to you with date and description. Of course you can also ask the summary / total amount of the debts.).",
      "",
      "That's all of planned features for now, feel free to let my maker know what features do you think is cool and important :)."
    ];
    bot.reply(message, rows.join("\n"));
  })
}
