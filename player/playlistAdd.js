var Discord = require("discord.js")

module.exports = (client, message, queue, playlist) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`${client.emotes.musicIcon} Playlist added __**[${playlist.title}](${playlist.url}}**__ (\`${playlist.tracks.length} tracks in the playlist\`)`)
    .setColor("E400FF")
    return message.channel.send(embed);
};