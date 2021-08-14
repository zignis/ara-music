var Discord = require("discord.js")

module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '*clear-queue',
    
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
        if (client.player.getQueue(message).tracks.length <= 1) {
            embed.setDescription(`${client.emotes.error} There is only a single song in the queue!`);
            return message.channel.send(embed);
        }
        try {
          client.player.clearQueue(message);
          embed.setDescription(`${client.emotes.success} Queue cleared!`);
          message.channel.send(embed);
        } catch(e) {
          embed.setDescription(`${client.emotes.error} Caught some errors:\n\`${e}\``);
          message.channel.send(embed);
        }
    },
};
