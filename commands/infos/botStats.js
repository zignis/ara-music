const Discord = require("discord.js")

module.exports = {
    name: 'botstats',
    aliases: ['stats'],
    category: 'Utility',
    utilisation: '*botstats',

    execute(client, message) {
        var ram = process.memoryUsage().heapUsed / 1024 / 1024;
        var RAM = Math.round(ram)
        let uptime = convertMs(message.client.uptime);
        let Embed = new Discord.MessageEmbed()
        .setTitle(`Ara Statistics`)
        .setColor("E400FF")
        Embed.addFields(
            { name: 'Channels', value: `\`\`\`${client.channels.cache.size.toLocaleString()}\`\`\``, inline: true},
            { name: 'Guilds', value: `\`\`\`${client.guilds.cache.size.toLocaleString()}\`\`\``, inline: true},
            { name: 'Users', value: `\`\`\`${client.users.cache.size.toLocaleString()}\`\`\``, inline: true},
            { name: 'RAM usage', value: `\`\`\`${RAM}\`\`\``, inline: true},
            { name: 'API Latency', value: `\`\`\`${client.ws.ping}\`\`\``, inline: true},
            { name: 'Uptime', value: `\`\`\`${uptime}\`\`\``, inline: true},
            { name: 'Developed by', value: `\`\`\`VelociRaptor#5757\`\`\``, inline: true},
            { name: 'Github', value: `\`\`\`HexM7\`\`\``, inline: true},
        )
        return message.channel.send(Embed)

        function convertMs(mills){
        let roundNumber = mills > 0 ? Math.floor : Math.ceil;
        let days = roundNumber(mills / 86400000),
        hours = roundNumber(mills / 3600000) % 24,
        mins = roundNumber(mills / 60000) % 60,
        secs = roundNumber(mills / 1000) % 60;
        var time = (days > 0) ? `${days} Days, ` : "";
        time += (hours > 0) ? `${hours} Hours, ` : "";
        time += (mins > 0) ? `${mins} Minutes, ` : "";
        time += (secs > 0) ? `${secs} Seconds` : "0 Seconds";
        return time;
      }
    },
};
