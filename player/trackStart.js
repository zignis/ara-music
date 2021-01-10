var Discord = require("discord.js")

module.exports = (client, message, track) => {
    let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.musicIcon} Playing __**[${track.title}](${track.url})**__ into \`${message.member.voice.channel.name}\``)
            .setColor("E400FF")
    return message.channel.send(embed);
};