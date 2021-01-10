var Discord = require("discord.js")

module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            let embed1 = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} No tracks playing!`)
            .setColor("E400FF")
            message.channel.send(embed1);
            break;
        case 'NotConnected':
            let embed2 = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} You're not connected to a voice channel!`)
            .setColor("E400FF")
            message.channel.send(embed2);
            break;
        case 'UnableToJoin':
            let embed3 = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Missing permissions!`)
            .setColor("E400FF")
            message.channel.send(embed3);
            break;
        default:
            let embed4 = new Discord.MessageEmbed()
            .setDescription(`${client.emotes.error} Something went wrong!\n\`\`\`${error}\`\`\`\nSend a support message using \`*contact\``)
            .setColor("E400FF")
            message.channel.send(embed4);
    };
};
