const Discord = require('discord.js');
var round = require('math-round');
const bot = new Discord.Client();
var auth = require('./auth/auth.json');
const prefix = "-";
const scan = require('./functions/core/scan.js')
bot.login(auth.token);

bot.on('ready', function () {
    bot.user.setPresence({
        game: {
            name: 'for new HSE members',
            type: 'WATCHING'
        },
        status: 'online'
    })
    console.log('Startup Sucessfull');
    console.log('Connected as: ' + bot.user.tag);
});


bot.on('message', function (message) {
    if (message.guild !== null) {
        if (message.author.bot) return; 
        if (message.content.startsWith(prefix)) {
            var args = message.content.substring(1).split(' ');
            var precmd = args[0];
            var cmd = precmd.toLowerCase();
            args = args.splice(1);
            switch (cmd) {
                case 'gmr':
                    scan.getRoles(message);
                    break;
                case 'ping':
                    message.reply('Pong! :ping_pong: (' + round(bot.ping) + 'ms) :ping_pong:');
                    break;
                default:
                    break;
            }
        }
    }
});