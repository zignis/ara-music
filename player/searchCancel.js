var Discord = require("discord.js")

module.exports = (client, message, query, tracks) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${client.emotes.error} Command timed-out!`)
    .setColor("E400FF")
    return message.channel.send(embed);
};