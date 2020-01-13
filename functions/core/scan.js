const insert = require('./dbinsert.js');
const Discord = require('discord.js');
const userembed = new Discord.RichEmbed();


module.exports = {
    getRoles: function(message){
        userembed
            .setTitle('Users with the Cordinator role:')
            .setDescription(message.guild.roles.get('644851168639713301').members.map(m=>m.user.id).join('\n'));
    message.channel.send(userembed);
    userembed
            .setTitle('Users with the Atendee role:')
            .setDescription(message.guild.roles.get('645559241150824469').members.map(m=>m.user.id).join('\n'));
    message.channel.send(userembed);
    
    let Cordinators =  message.guild.roles.get('644851168639713301').members.map(m=>m.user.id);
    insert.insert(Cordinators, true); 
    let Atendees =  message.guild.roles.get('645559241150824469').members.map(m=>m.user.id);
    insert.insert(Atendees, false);                    
    }
}