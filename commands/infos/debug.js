var Discord = require("discord.js")

module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Utility',
    utilisation: '*debug',

    execute(client, message) {
        let embed = new Discord.MessageEmbed()
        .setColor("E400FF");
        if (message.author.id !== process.env.OWNER) {
            embed.setDescription(`This is an owner-only command!`)
            return message.channel.send(embed);
        }
        embed.setDescription(`Channels connected - \`${client.voice.connections.size}\``)
        return message.channel.send(embed);
    },
};
