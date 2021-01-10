var Discord = require("discord.js")

module.exports = (client, message, query, tracks) => {
  let embed = new Discord.MessageEmbed()
    .setDescription(`Results for \`${query}\`\n\n${tracks.map((t, i) => `\`${i + 1}\` **•** \`${t.title}\` **|** \`(${t.duration})\` `).join('\n')}`)
    .setColor("E400FF")
    return message.channel.send(embed);
};