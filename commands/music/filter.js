var Discord = require("discord.js")

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '*filter [filter-name]',

    execute(client, message, args) {
        let embed = new Discord.MessageEmbed().setColor("E400FF");
        if (!message.member.voice.channel) {
            embed.setDescription(`${client.emotes.error} You're not connected to a voice channel!`)
            return message.channel.send(embed);
        }
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            embed.setDescription(`${client.emotes.error} You're in a different voice channel!`)
            return message.channel.send(embed);
        }
        if (!client.player.getQueue(message)) {
            embed.setDescription(`${client.emotes.error} Queue is currently empty!`)
            return message.channel.send(embed);
        }
        if (!args[0]) {
            embed.setDescription(`${client.emotes.error} Invalid filter!`)
            return message.channel.send(embed);
        }
        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());
        if (!filterToUpdate) {
            embed.setDescription(`${client.emotes.error} Invalid filter! Use \`*help\` to get a list of filters available`);
            return message.channel.send(embed);
        }
        const filtersUpdated = {};
        try {
              filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;
              client.player.setFilters(message, filtersUpdated);
              if (filtersUpdated[filterToUpdate]) {
                  embed.setDescription(`${client.emotes.success} Filter applied!`)
                  return message.channel.send(embed); 
              } else {
                  embed.setDescription(`${client.emotes.success} Filter removed!`)
                  return message.channel.send(embed);
              } 
        } catch(e) {
              embed.setDescription(`${client.emotes.error} Caught some errors:\n\`${e}\``);
              message.channel.send(embed);
        }
    },
};
