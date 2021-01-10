var Discord = require("discord.js")

module.exports = (client, message, query) => {
    let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} No results found for \`${query}\`!`)
            .setColor("E400FF")
    return message.channel.send(embed);
};