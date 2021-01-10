var Discord = require("discord.js")

module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '*pause',

    execute(client, message) {
        if (!message.member.voice.channel) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} You're not connected to a voice channel!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} You're in a different voice channel!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        if (!client.player.getQueue(message)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Queue is currently empty!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }


        if (client.player.getQueue(message).paused) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Track is already paused!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        client.player.pause(message);
        let embed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.success} Paused __**[${client.player.getQueue(message).playing.title}](${client.player.getQueue(message).playing.url})**__!`)
        .setColor("E400FF")
        return message.channel.send(embed);
    },
};