// Generates 6 random numbers for the PowerBall lottery
module.exports = {
    name: 'powerball',
    aliases: ['pb'],
    description: 'Will let you win millions of dollars by predicting the powerball.',
    cooldown: 5,
    execute(message) {
        const ballOne = Math.floor(Math.random() * Math.floor(69))
        const ballTwo = Math.floor(Math.random() * Math.floor(69))
        const ballThree = Math.floor(Math.random() * Math.floor(69))
        const ballFour = Math.floor(Math.random() * Math.floor(69))
        const ballFive = Math.floor(Math.random() * Math.floor(69))
        const finalBall = Math.floor(Math.random() * Math.floor(26))

        const balls = [ballOne, ballTwo, ballThree, ballFour, ballFive, finalBall]

        return message.reply(balls);
    },
};
