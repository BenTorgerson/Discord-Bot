// Picks a random anime and recommends it to the user
module.exports = {
    name: 'randomanime',
    aliases: 'ra',
    description: 'Gives a random anime recommendation.',
    cooldown:3,
    execute(message, args) {
        const animes = [
          "Cowboy Bebop",
          "Dragon Ball Z",
          "Naruto",
          "Bleach",
          "Ergo Proxy",
          "Samurai Champloo",
          "Steins;Gate 0",
          "Gangsta",
          "Yuri On Ice",
          "One Piece",
          "Hunter X Hunter",
          "Terror in Resonance",
          "One Punch Man",
          "Tokyo Ghoul",
          "Psycho-Pass",
          "Soul Eater",
          "Death Note",
          "Fullmetal Alchemist",
          "Code Geass",
          "Attack on Titan",
          "Future Diary",
          "Jojo's Bizarre Adventure",
          "Sword Art Online",
          "Land of the Lustrous",
          "Inuyashiki"
        ]
        return message.reply('I recommend you watch ' + animes[Math.floor(Math.random() * animes.length)] + '.');
    },
};
