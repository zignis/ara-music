module.exports = async (client) => {
    console.log(`Ready (${client.guilds.cache.size} servers, ${client.users.cache.size} users)`);
    client.user.setActivity(client.config.discord.activity);
};
