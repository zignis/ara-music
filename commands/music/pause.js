var Discord = require("discord.js")

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '*pause',

    execute(client, message) {
       let embed = new Discord.MessageEmbed().setColor("E400FF");
        if (!message.member.voice.channel) {
            embed.setDescription(`${client.emotes.error} You're not connected to a voice channel!`);
            return message.channel.send(embed);
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            embed.setDescription(`${client.emotes.error} You're in a different voice channel!`);
            return message.channel.send(embed);
        }
        if (!client.player.getQueue(message)) {
            embed.setDescription(`${client.emotes.error} Queue is currently empty!`);
            return message.channel.send(embed);
        }
        if (client.player.getQueue(message).paused) {
            embed.setDescription(`${client.emotes.error} Track is already paused!`);
            return message.channel.send(embed);
        }
        client.player.pause(message);
        embed.setDescription(`${client.emotes.success} Paused __**[${client.player.getQueue(message).playing.title}](${client.player.getQueue(message).playing.url})**__!`)
        message.channel.send(embed);
    },
};
