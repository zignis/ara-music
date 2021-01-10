var Discord = require("discord.js")

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Music',
    utilisation: '*volume [1-100]',

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


        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Invalid number!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Enter a number between \`1\` and \`100\`!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        client.player.setVolume(message, parseInt(args[0]));
        let embed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.success} Volume set to \`${parseInt(args[0])}\`!`)
        .setColor("E400FF")
        return message.channel.send(embed);
    },
};
