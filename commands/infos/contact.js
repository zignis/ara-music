var Discord = require("discord.js")

module.exports = {
    name: 'contact',
    aliases: [],
    category: 'Utility',
    utilisation: '*contact [message]',

    execute(client, message) {
        const prefix = "*"
        if (message.content.indexOf(prefix) !== 0) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        if (!args[0]){
            let embed = new Discord.MessageEmbed()
            .setColor("E400FF")
            .setDescription(`${client.emotes.error} Can't send empty message!`)
            return message.channel.send(embed);
        }
        let messageA = args.slice(1).join(' ')
        let contactEmbed = new Discord.MessageEmbed()
        .setDescription(`Contact message from **${message.guild.name}**\nID **:** \`${message.guild.id}\``)
        .setColor("E400FF")
        contactEmbed.addFields(
            { name: 'User', value: `\`${message.author.tag}\``},
            { name: 'User ID', value: `\`${message.author.id}\``},
            { name: 'Message', value: `\`\`\`${messageA}\`\`\``},
        )
        client.guilds.cache.get("764431944951791616").channels.cache.get("776040646645383208").send(contactEmbed);

        let sentEmbed = new Discord.MessageEmbed()
        .setDescription(`${client.emotes.success} Your message was sent to the support team.`)
        .setColor("E400FF")
        sentEmbed.addFields(
            { name: 'Message', value: `\`\`\`${messageA}\`\`\``},
        )
        return message.channel.send(sentEmbed)
    },
};