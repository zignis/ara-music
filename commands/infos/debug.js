var Discord = require("discord.js")

module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Utility',
    utilisation: '*debug',

    execute(client, message) {
        if (message.author.id !== process.env.OWNER) {
            let embed = new Discord.MessageEmbed()
            .setColor("E400FF")
            .setDescription(`This is an owner-only command!`)
            return message.channel.send(embed);
        }
        let embed = new Discord.MessageEmbed()
            .setColor("E400FF")
            .setDescription(`Channels connected - \`${client.voice.connections.size}\``)
        return message.channel.send(embed);
    },
};
