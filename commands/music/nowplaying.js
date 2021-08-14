var Discord = require("discord.js")

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '*nowplaying',

    execute(client, message) {
      let embed = new Discord.MessageEmbed().setColor("E400FF");
        if (!message.member.voice.channel) {
            embed.setDescription(`${client.emotes.error} You're not connected to a voice channel!`);
            return message.channel.send(embed);
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            embed.setDescription(`${client.emotes.error} You're in a different voice channel!`);
            return message.channel.send(embed);
        }
        if (!client.player.getQueue(message)) {
            embed.setDescription(`${client.emotes.error} Queue is currently empty!`);
            return message.channel.send(embed);
        }
        try {
              const track = client.player.nowPlaying(message);
              const filters = [];
              Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;
              message.channel.send({
                  embed: {
                      color: 'E400FF',
                      description: `__**[${track.title}](${track.url})**__` ,
                      fields: [
                          { name: `Channel`, value: "`" + track.author + "`", inline: true },
                          { name: `Requested by`, value: "`" + track.requestedBy.tag + "`", inline: true },
                          { name: `From playlist`, value: track.fromPlaylist ? '`Yes`' : '`No`', inline: true },
                          { name: `Views`, value: "`" + track.views + "`", inline : true },
                          { name: `Duration`, value: "`" + track.duration + "`", inline: true },
                          { name: `Filters activated`, value: "`" + filters.length + '/' + client.filters.length + "`", inline: true },
                          { name: `Volume`, value: "`" + client.player.getQueue(message).volume + "`", inline: true },
                          { name: `Repeat mode`, value: client.player.getQueue(message).repeatMode ? '`On`' : '`Off`', inline: true },
                          { name: `Currently paused`, value: client.player.getQueue(message).paused ? '`Yes`' : '`No`', inline: true },
                          { name: `Progress bar`, value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                      ],
                      thumbnail: { url: track.thumbnail },
                  },
              });
        } catch(e) {
          return;
        }
    },
};
