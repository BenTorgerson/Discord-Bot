module.exports = {
    name: 'randomsong',
    aliases: ['rs', 'r'],
    description: 'Gives you a randomly selected song. Picks a random genre if not given one.',
    cooldown: 5,
    execute(message, args) {

      var metal = [
        "https://www.youtube.com/watch?v=7F5SSLPNCNE",
        "https://www.youtube.com/watch?v=sT1W5nmiDuA",
        "https://www.youtube.com/watch?v=LFh-CZFe-R4",
        "https://www.youtube.com/watch?v=LQeU6X15caw",
        "https://www.youtube.com/watch?v=a3TpBg1T9_k",
        "https://www.youtube.com/watch?v=t-7aJxrFr4E",
        "https://www.youtube.com/watch?v=SYRYVlgYMlk",
        "https://www.youtube.com/watch?v=kRQTtrXhsks",
        "https://www.youtube.com/watch?v=oI7GzbNLGOY",
        "https://www.youtube.com/watch?v=TqVLhYoWQGo",
        "https://www.youtube.com/watch?v=7WAJygma83A"
    ]

      var rap = [
        "https://www.youtube.com/watch?v=_hFTVYfnkJ0",
        "https://www.youtube.com/watch?v=FgmtwuMKawA",
        "https://www.youtube.com/watch?v=dCMxwTOWR_U",
        "https://www.youtube.com/watch?v=X93GyqpdM3w",
        "https://www.youtube.com/watch?v=gAs9HZC9c7Y",
        "https://www.youtube.com/watch?v=6YqSS_b_X1U",
        "https://www.youtube.com/watch?v=7JGDWKJfgxQ",
        "https://www.youtube.com/watch?v=tsp7IOr7Q9A"
    ]

      var rock = [
        "https://www.youtube.com/watch?v=e8X3ACToii0",
        "https://www.youtube.com/watch?v=xPU8OAjjS4k",
        "https://www.youtube.com/watch?v=0J2QdDbelmY",
        "https://www.youtube.com/watch?v=DWaB4PXCwFU",
        "https://www.youtube.com/watch?v=d8ekz_CSBVg",
        "https://www.youtube.com/watch?v=iywaBOMvYLI",
        "https://www.youtube.com/watch?v=V7uEb_XrK1U",
        "https://www.youtube.com/watch?v=p32b5nNq1zw"
      ]

      var pop = [
        "https://www.youtube.com/watch?v=SDTZ7iX4vTQ",
        "https://www.youtube.com/watch?v=SSCzDykng4g",
        "https://www.youtube.com/watch?v=0KSOMA3QBU0",
        "https://www.youtube.com/watch?v=FJfFZqTlWrQ",
        "https://www.youtube.com/watch?v=TkV5709EG5M"
      ]

      // random songs that can only be accessed through the random feature
      var misc = [
        "https://www.youtube.com/watch?v=_uj8h4SCsnE"
      ]
      var genres = [metal, rap, rock, pop, misc]

      if (!args.length) {
        const randomGenre = genres[Math.floor(Math.random() * genres.length)];
        return message.reply(randomGenre[Math.floor(Math.random() * randomGenre.length)]);
      }

      const genre = args[0].toLowerCase();

      if (genre === "metal") {
        return message.reply(metal[Math.floor(Math.random() * metal.length)]);
      }
      else if (genre === "rap") {
        return message.reply(rap[Math.floor(Math.random() * rap.length)]);
      }
      else if (genre === "pop") {
        return message.reply(pop[Math.floor(Math.random() * pop.length)]);
      }
      else if (genre === "rock") {
        return message.reply(rock[Math.floor(Math.random() * rock.length)]);
      }
      else {
        return message.reply("I did not understand that genre, please try again, or try without giving a genre!");
      }

    },
};
