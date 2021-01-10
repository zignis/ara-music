var Discord = require("discord.js")

module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '*search [name/URL]',

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
        if (!args[0]) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Specify title of the track!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }
        client.player.play(message, args.join(" "));
    },
};