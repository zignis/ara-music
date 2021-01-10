const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const { Player } = require('discord-player');
var Discord = require("discord.js")

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('ready', msg => {
    client.channels.cache.get("794533925073846273").messages.fetch("796234463046664262")
    .then((msg) => {
        setInterval(function() {
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter("Real-time Data • Destiny")
        embed.addFields(
          { name: "Guilds", value: "```" + client.guilds.cache.size + "```", inline: true},
          { name: "Channels", value:  "```" + client.channels.cache.size + "```", inline: true },
          { name: "Channels connected", value: "```" + client.voice.connections.size + "```", inline: true},
          { name: "Users", value:  "```" + client.users.cache.size + "```", inline: true },
          { name: "API Latency", value:  "```" + client.ws.ping + "```", inline: true },
        )
        msg.edit(embed)
      }, 5000)}
     ) 
      }
    )
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

client.login(process.env.TOKEN);

client.on('message', message => {
  if (message.content === "*restart") {
   if (message.author.id === process.env.OWNER) {
     resetBot(message.channel);
   } else {
    return message.reply("** this is an owner only command!**")
   }
  } 
});

function resetBot(channel) {
    channel.send('`WARN: Shutting down...`').then((msg)=>{
      for (i = 0; i < 11; i++) {
        msg.edit(`**Launching in ${10 - i}!**`)
        if (i === 10) {
          msg.edit(`**Re-launched!**\n**Web-Socket : ${client.ws.ping}**\n\`${client.uptime}\``)
        }
      }
    client.destroy()
    client.login(process.env.TOKEN)
    })}