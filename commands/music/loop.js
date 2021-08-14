var Discord = require("discord.js")

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '*loop',

    execute(client, message, args) { 
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
        try {
            if (args.join(" ").toLowerCase() === 'queue') {
                if (client.player.getQueue(message).loopMode) {
                    client.player.setLoopMode(message, false);
                    embed.setDescription(`${client.emotes.success} Repeat mode disabled!`);
                    return message.channel.send(embed);
                } else {
                    client.player.setLoopMode(message, true);
                    embed.setDescription(`${client.emotes.success} Repeat mode enabled! [Queue will be repeated]`);
                    return message.channel.send(embed);
                };
            } else {
                if (client.player.getQueue(message).repeatMode) {
                    client.player.setRepeatMode(message, false);
                    embed.setDescription(`${client.emotes.success} Repeat mode disabled!`);
                    return message.channel.send(embed);
                } else {
                    client.player.setRepeatMode(message, true);
                    embed.setDescription(`${client.emotes.success} Repeat mode enabled! [Current track will be repeated]`);
                    return message.channel.send(embed);
                };
            };
        } catch(e) {
          return;
        }
    },
};
