const Discord = require("discord.js")

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Utility',
    utilisation: '*ping',

    execute(client, message) {
        let embed = new Discord.MessageEmbed() 
        .setDescription(`${client.emotes.musicIcon} **| Pong!** \`${client.ws.ping}\``)
        .setColor("E400FF");
        message.channel.send(embed)
    },
};
