var Discord = require("discord.js")

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '*play [name/URL]',

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
        if (!args[0]) {
            embed.setDescription(`${client.emotes.error} Specify title of the track!`);
            return message.channel.send(embed);
        }
        client.player.play(message, args.join(" "), { firstResult: true });
    },
};
