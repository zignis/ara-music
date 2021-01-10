var Discord = require("discord.js")

module.exports = {
    name: 'listguilds',
    aliases: ['lg'],
    category: 'Utility',
    utilisation: '*listguilds',

    execute(client, message) {
        if (message.author.id !== "736304634603503626") {
            let embed = new Discord.MessageEmbed()
            .setColor("E400FF")
            .setDescription(`This is an owner-only command!`)
            return message.channel.send(embed);
        }
        let i = 1;
        client.guilds.cache.forEach(guild => {
                const channel = guild.channels.cache 
                    .filter((channel) => channel.type === 'text')
                    .first();
                if (!channel || !guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) return;
                createLink(channel,guild,message);
        });
        async function createLink(chan,guild,message) {
          let invite = await chan.createInvite().catch(console.error);
          try{
                let embed = new Discord.MessageEmbed()
                .setColor("E400FF")
                .setDescription(`\`${i}.\` **[${guild.name}](${invite})** [\`${guild.memberCount}\` Users]`)
                i = i+1;
                return message.channel.send(embed);
          }catch (e) {
            return;
          }
        }
            },
        };