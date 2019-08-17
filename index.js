/**
 * A bot that welcomes new guild members when they join
 */

const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("guildMemberAdd", member => {
  const c = name =>
    (
      member.guild.channels.find(
        channel => console.log(channel.name) || channel.name === name
      ) || `#${name}`
    ).toString();

  member.send(
    `
Bienvenue sur le serveur Discord d'Alliés Numériques, ${member} !

**Qu’est-ce que Alliés Numériques ?**

Vous créez du contenu numérique ou vous souhaitez vous lancer ? Vous faites du podcast, de la vidéo sur YouTube ou autre, ou vous ne savez pas comment faire ? Alors Alliés Numériques est fait pour vous.
Alliés Numériques, c’est une communauté, un espace d’échanges, de conseils en création, et de soutiens.

Cette fédération de plusieurs associations et de particuliers peut répondre à vos questions et vous aiguillier vers les meilleures options techniques (matériels, logiciels) et humaines à mettre en place.
Alliés Numériques, c’est aussi une communauté active et à l’écoute. N’hésitez pas à vous connecter sur le serveur discord de la fédération !

Enfin, Alliés Numériques est également là pour faire entendre la voix des créateurs numériques. Plus vous serez nombreux, plus vous serez entendus.

**Qui est Alliés Numériques ?**

Alliés Numériques c’est un ensemble de créateurs. Ce n’est pas une personne ou un groupe en particulier. Les instigateurs d’Alliés Numériques souhaitent un environnement ouvert et qui appartient à tout le monde.
Vous pouvez contribuer au site et à la communauté et ainsi venir en aide à d’autres créateurs, car il n’y a aucune mauvaise question et qu’on s’est tous demandé les mêmes choses à un moment donné, en trouvant des solutions différentes.

Alliés Numériques, c’est nous tous, tout simplement.

----------------

N'hésitez pas à vous présenter auprès des autres sur le salon ${c(
      "présentations"
    )}.

Et demandez qu'on ajoute le nom de votre/vos podcasts/asso/groupe à votre utilisateur dans : ${c(
      "demande-de-rôle"
    )}.

N'hésitez pas à passer sur le site et découvrir les tutoriels et ressources offerts par la communauté pour la communauté  :
https://alliesnumeriques.org/
`
  );
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
