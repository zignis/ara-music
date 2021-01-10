var Discord = require("discord.js")

module.exports = {
    name: 'server',
    aliases: [],
    category: 'Utility',
    utilisation: '*server',

    execute(client, message) {
        let Embed = new Discord.MessageEmbed()
        .setTitle(`Support Server`)
        .setColor("E400FF")
        .setDescription(`[DESTINY](https://discord.gg/N5GMPZD5sX)`)
        return message.channel.send(Embed)
    },
};