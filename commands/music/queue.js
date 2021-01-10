var Discord = require("discord.js")

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '*queue',

    execute(client, message) {
        if (!message.member.voice.channel) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} You're not connected to a voice channel!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} You're in a different voice channel!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }
        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Queue is currently empty!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }
        let queueEmbed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.queue} **Queue ${client.player.getQueue(message).loopMode ? '(Repeating)' : ''}**\n**Current :** __**[${queue.playing.title}](${queue.playing.url})**__\n\n` + (queue.tracks.map((track, i) => {
                return `\`${i + 1}.\` __**[${track.title}](${track.url})**__ \`(${track.duration} | Requested by ${track.requestedBy.tag})\``
            }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `\`And ${queue.tracks.length - 5} more track(s)...\`` : ` `}`))
            .setColor("E400FF")
            .setFooter(`Total track(s) currently in the queue - ${queue.tracks.length}`)
        return message.channel.send(queueEmbed);
    },
};