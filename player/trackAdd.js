var Discord = require("discord.js")

module.exports = (client, message, queue, track) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${client.emotes.musicIcon} Added __**[${track.title}](${track.url})**__ to the queue!`)
    .setColor("E400FF")
    return message.channel.send(embed);
};