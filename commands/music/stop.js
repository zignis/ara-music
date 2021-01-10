var Discord = require("discord.js")

module.exports = {
    name: 'stop',
    aliases: ['dc', 'leave', 'disconnect'],
    category: 'Music',
    utilisation: '*stop',

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

        try {
          message.react("<a:Wave:797466729168109588>")
          client.player.setRepeatMode(message, false);
          client.player.stop(message);
          let embed = new Discord.MessageEmbed()
          .setDescription(`${client.emotes.success} Music stopped!`)
          .setColor("E400FF")
          return message.channel.send(embed);
        } catch(e) {
          return;
        }
    },
};