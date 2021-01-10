var Discord = require("discord.js")

module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '*filter [filter-name]',

    execute(client, message, args) {
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

        if (!args[0]) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Invalid filter!`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) {
            let embed = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Invalid filter! Use \`*help\` to get a list of available filters`)
            .setColor("E400FF")
            return message.channel.send(embed);
        }

        const filtersUpdated = {};
        try {
              filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

              client.player.setFilters(message, filtersUpdated);

              if (filtersUpdated[filterToUpdate]) {
                  let embed = new Discord.MessageEmbed()
                  .setDescription(`${client.emotes.success} Filter applied!`)
                  .setColor("E400FF")
                  return message.channel.send(embed);
                  
              }
              else {
                  let embed = new Discord.MessageEmbed()
                  .setDescription(`${client.emotes.success} Filter removed!`)
                  .setColor("E400FF")
                  return message.channel.send(embed);
              } 
        } catch(e) {
          return;
        }
    },
};