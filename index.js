const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjExOTQ1MjM2NTc4NTY2MTQ1.XVbPKA.nMmoNK6hVM7uoY6fvFTbNzJ7hqY';

bot.on('ready', () =>{
    console.log('Your bot is online!');
})

// Target = '195714819549167617'

bot.on("message", async message => {
    if(message.author.id != '195714819549167617') return;
    message.react('⬇');

});

bot.login(token);
