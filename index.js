//var Botkit = require('botkit')

const Bot = require('slackbots');

var token = process.env.SLACK_TOKEN;
var name = process.env.SLACK_NAME;

const slackBot = new Bot({
  token: token,
  name: name
});

slackBot.on('message', function (data) {
  var message = "message: " + JSON.stringify(data);
  console.log(message);
  slackBot.postMessage("@alex009", message);
});

// var controller = Botkit.slackbot({
//   // reconnect to Slack RTM when connection goes bad
//   retry: Infinity,
//   debug: true
// })
//
// // Assume single team mode if we have a SLACK_TOKEN
// if (token) {
//   console.log('Starting in single-team mode')
//   controller.spawn({
//     token: token,
//     retry: Infinity
//   }).startRTM(function (err, bot, payload) {
//     if (err) {
//       throw new Error(err)
//     }
//
//     console.log('Connected to Slack RTM')
//   })
// // Otherwise assume multi-team mode - setup beep boop resourcer connection
// } else {
//   console.log('Starting in Beep Boop multi-team mode')
//   require('beepboop-botkit').start(controller, { debug: true })
// }
//
// controller.on('message_received',function(bot,message) {
//   var text = message.user + ' message_received ' + message.text;
//   console.log(text);
//
//   bot.say({
//     text: message.text,
//     channel: "@alex009",
//     icon_emoji: ":dash:"
//   });
// });
//
// controller.on('direct_message',function(bot,message) {
//   var text = message.user + ' direct_message ' + message.text;
//   console.log(text);
//
//   bot.say({
//     text: message.text,
//     channel: "@alex009",
//     icon_emoji: ":dash:"
//   });
// });
//
// controller.on('direct_mention',function(bot,message) {
//   var text = message.user + ' direct_mention ' + message.text;
//   console.log(text);
//
//   bot.say({
//     text: message.text,
//     channel: "@alex009",
//     icon_emoji: ":dash:"
//   });
// });
//
// controller.on('ambient',function(bot,message) {
//   var text = message.user + ' ambient ' + message.text;
//   console.log(text);
//
//   bot.say({
//     text: message.text,
//     channel: "@alex009",
//     icon_emoji: ":dash:"
//   });
// });
//
// controller.on('bot_channel_join', function (bot, message) {
//   bot.reply(message, "I'm here!")
// });
//
// controller.hears('help', ['direct_message', 'direct_mention'], function (bot, message) {
//   var help = 'I will respond to the following messages: \n' +
//       '`bot hi` for a simple message.\n' +
//       '`bot attachment` to see a Slack attachment message.\n' +
//       '`@<your bot\'s name>` to demonstrate detecting a mention.\n' +
//       '`bot help` to see this again.'
//   bot.reply(message, help)
// });
//
// controller.hears(['attachment'], ['direct_message', 'direct_mention'], function (bot, message) {
//   var text = 'Beep Beep Boop is a ridiculously simple hosting platform for your Slackbots.'
//   var attachments = [{
//     fallback: text,
//     pretext: 'We bring bots to life. :sunglasses: :thumbsup:',
//     title: 'Host, deploy and share your bot in seconds.',
//     image_url: 'https://storage.googleapis.com/beepboophq/_assets/bot-1.22f6fb.png',
//     title_link: 'https://beepboophq.com/',
//     text: text,
//     color: '#7CD197'
//   }]
//
//   bot.reply(message, {
//     attachments: attachments
//   }, function (err, resp) {
//     console.log(err, resp)
//   })
// })
