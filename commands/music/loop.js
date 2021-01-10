var Discord = require("discord.js")

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '*loop',

    execute(client, message, args) {
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
            if (args.join(" ").toLowerCase() === 'queue') {
                if (client.player.getQueue(message).loopMode) {
                    client.player.setLoopMode(message, false);
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`${client.emotes.success} Disabled repeat mode!`)
                    .setColor("E400FF")
                    return message.channel.send(embed);
                } else {
                    client.player.setLoopMode(message, true);
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`${client.emotes.success} Enabled repeat mode! [Queue will be repeated]`)
                    .setColor("E400FF")
                    return message.channel.send(embed);
                };
            } else {
                if (client.player.getQueue(message).repeatMode) {
                    client.player.setRepeatMode(message, false);
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`${client.emotes.success} Disabled repeat mode!`)
                    .setColor("E400FF")
                    return message.channel.send(embed);
                } else {
                    client.player.setRepeatMode(message, true);
                    let embed = new Discord.MessageEmbed()
                    .setDescription(`${client.emotes.success} Enabled repeat mode! [Current track will be repeated]`)
                    .setColor("E400FF")
                    return message.channel.send(embed);
                };
            };
        } catch(e) {
          return;
        }
    },
};