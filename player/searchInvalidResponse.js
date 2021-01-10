var Discord = require("discord.js")

module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        let embed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.success} Cancelled!`)
        .setColor("E400FF")
        return message.channel.send(embed);
    } else {
        let embed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.error} Provide a valid track number between \`1\` and \`${tracks.length}\`!`)
        .setColor("E400FF")
        return message.channel.send(embed);
    }
};