var Discord = require("discord.js")

module.exports = {
    name: 'list-filters',
    aliases: ['filters', 'list-filters', 'lf'],
    category: 'Music',
    utilisation: '*list-filters',

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

        if (!client.player.getQueue(message)) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Queue is currently empty!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }
        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push((client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off) + "** • **`" + (filterName.charAt(0).toUpperCase() + filterName.slice(1)) + "`");
        });
        message.channel.send({
            embed: {
                color: 'E400FF',
                fields: [
                    { name: 'Available filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
            },
        });
    },
};