const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

    // -> Logs d'informations.

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'ExtaziaRP.', type : 0}})
    console.log("[BOT ExtaziaRP] LOGS -> Le bot est actuellement en ligne sur les serveurs discord. [Succès]");
});    

    // -> Rejoindre / quitter le serveur.

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur discord!`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur discord!`)
})

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /annonce.

    if (command === 'annonce') {
        if(message.author.id == "406124485612142592", "344771703039066113"){
            let say = args.join(' ');
            message.delete();
            message.channel.send(say);
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /annonce [<message>] [Succès].");
        }
    }

    // -> Commande /connexion.
    
    if (message.content === prefix + "connexion"){
        message.delete();
        var connexion_embed = new Discord.RichEmbed()
            .setColor('#05E2F0')
            .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
            .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
            .addField("**Comment puis-je me connecter sur le serveur ?**", "─────────────────────")
            .addField("**__Première étape:__**", "• L'adresse IP n'est pas encore disponible.")
            .addField("**__Deuxième étape:__**", "• Il vous suffit d'ouvrir la console (F8) et inscrire -> connect [<ip>].")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(connexion_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /connexion [Succès].");
    }

// -> Commande /vote.
    
    if (message.content === prefix + "vote"){
        message.delete();
        var vote_embed = new Discord.RichEmbed()
            .setColor('#05E2F0')
            .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
            .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
            .addField("**Comment puis-je soutenir le serveur gratuitement ?**", "─────────────────────")
            .addField("**Il vous suffit de cliquer sur le lien ci-dessous:**", "**https://gta.top-serveurs.net/frbe-extaziarp-rp-serieux-illegal-legal-16-whitelist**")
            .addField("─────────────────────", "Merci aux personnes qui voteront pour le serveur ! ❤️")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(vote_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /vote [Succès].");
    }
    
// -> Commande /don    
    
    if (message.content === prefix + "don"){
        message.delete();
        var don_embed = new Discord.RichEmbed()
            .setColor('#05E2F0')
            .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
            .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
            .addField("**Comment puis-je contribuer financièrement pour le serveur?**", "─────────────────────")
            .addField("**Il vous suffit de cliquer sur le lien ci-dessous:**", "**https://www.patreon.com/extaziarp?fan_landing=true**")
            .addField("─────────────────────", "Nous vous remercions pour chaque don, même le plus petit, mais ne vous sentez pas obligé d'y participer. C’est au bon vouloir de chacun. Merci d’être présent pour le serveur on ne le répétera jamais assez ! ❤️")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(don_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /don [Succès].");
    }
});


bot.login(process.env.TOKEN);
