var Discord = require("discord.js")

module.exports = {
    name: 'invite',
    aliases: [],
    category: 'Utility',
    utilisation: '*invite',

    execute(client, message) {
        let Embed = new Discord.MessageEmbed()
        .setTitle(`Invite Ara`)
        .setColor("E400FF")
        .setDescription(`[ARA](https://ptb.discord.com/api/oauth2/authorize?client_id=795527817697427476&permissions=8&scope=bot)`)
        return message.channel.send(Embed)
    },
};