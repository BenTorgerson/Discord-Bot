// Kicks a user from the server
module.exports = {
    name: 'kick',
    aliases: 'k',
    description: 'Kicks a user from the server.',
    cooldown: 10,
    execute(message) {
        const user = message.mentions.users.first();
        user.kick("Kicked by server administrator.");
        console.log(`kicked ${user.displayName}`)
        message.reply('User Kicked');
    },
};
