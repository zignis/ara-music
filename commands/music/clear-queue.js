var Discord = require("discord.js")

module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '*clear-queue',

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

        if (client.player.getQueue(message).tracks.length <= 1) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} There is only a single song in the queue!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }
        try {
          client.player.clearQueue(message);
          let embed = new Discord.MessageEmbed()
              .setDescription(`${client.emotes.success} Queue cleared!`)
              .setColor("E400FF")
          return message.channel.send(embed);
        } catch(e) {
          return;
        }
    },
};