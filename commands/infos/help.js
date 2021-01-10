const { Guild } = require("discord.js");
var Discord = require("discord.js")

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Utility',
    utilisation: '*help [command-name]',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Utility').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const infosTotal = message.client.commands.filter(x => x.category == 'Utility').size;
            const musicTotal = message.client.commands.filter(x => x.category == 'Music').size;
            const filtersTotal = client.filters.length;
            const total = message.client.commands.filter(x => x.category == 'Music').size + message.client.commands.filter(x => x.category == 'Utility').size;

            let embed = new Discord.MessageEmbed()
            .setAuthor(`${client.user.username} Help`, message.guild.iconURL())
            .setDescription(`Ara Help List\nPrefix is \`*\`\nUse \`*help [command-name]\` for details about a specific command.\n\n${client.emotes.partner} **•** [Invite](https://discord.com/oauth2/authorize?client_id=795527817697427476&permissions=8&scope=bot)\n${client.emotes.partner} **•** [Support Server](https://discord.gg/N5GMPZD5sX)`)
            .setFooter(`${client.user.username} • Total Commands - ${total} • Version : Beta`, client.user.avatarURL())
            .setThumbnail(client.user.avatarURL())
            .setColor("E400FF")
            .addFields(
                { name: `${client.emotes.musicIcon} **|** Utility [${infosTotal}]`, value: infos },
                { name: `${client.emotes.musicIcon} **|** Music [${musicTotal}]`, value: music },
                { name: `${client.emotes.musicIcon} **|** Filters [${filtersTotal}]`, value: client.filters.map((x) => '`' + x + '`').join(', ') }
            )
            

   message.channel.send(embed)
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'E400FF',
                    author: { name: 'Command Help' },
                    fields: [
                        { name: 'Name', value: "```" + command.name + "```", inline: true },
                        { name: 'Category', value: "```" + command.category + "```" , inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? '```None```' : "```" + command.aliases.join(', ') + "```", inline: true },
                        { name: 'Utilisation', value: "```" + command.utilisation.replace('*', client.config.discord.prefix) +  "```", inline: true },
                    ],
                    timestamp: new Date(),
                }
            });
        };
    },
};