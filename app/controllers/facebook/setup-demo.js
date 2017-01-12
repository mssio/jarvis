/* eslint-disable brace-style */
/* eslint-disable camelcase */

module.exports = function (controller) {
  
  // controller.setupWebserver(process.env.PORT || 3000, function(err, webserver) {
  //     controller.createWebhookEndpoints(webserver, bot, function() {
  //         console.log('ONLINE!');
  //     });
  // });

  controller.api.thread_settings.greeting('Hello! I\'m a Botkit bot!');
  controller.api.thread_settings.get_started('sample_get_started_payload');
  controller.api.thread_settings.menu([
      {
          "type":"postback",
          "title":"Hello",
          "payload":"hello"
      },
      {
          "type":"postback",
          "title":"Help",
          "payload":"help"
      },
      {
        "type":"web_url",
        "title":"Botkit Docs",
        "url":"https://github.com/howdyai/botkit/blob/master/readme-facebook.md"
      },
  ]);
}
