module.exports = {
    name: 'close',
    description: 'Closes the bot, only usable by bot owner',
    cooldown: 10,
    execute(message) {
        if (message.author.id === '126192880455909377') {
            process.exit();
        }
        else {
          message.reply("Only the bot owner can close me.");
        }
    },
};
