// Bans a user from the server
module.exports = {
    name: 'ban',
    aliases: 'b',
    description: 'Bans a user from the server.',
    cooldown: 10,
    execute(message) {
        const user = message.mentions.users.first();
        message.guild.ban(user);
        message.reply('User Banned.');
    },
};
