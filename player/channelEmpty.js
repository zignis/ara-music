var Discord = require("discord.js")

module.exports = (client, message, queue) => {
    let embed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.error} Music stopped because the channel is empty!`)
        .setColor("E400FF")
    return message.channel.send(embed);
};