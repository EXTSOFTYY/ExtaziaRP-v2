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
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de rejoindre le serveur discord d'ExtaziaRP!`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "【🔒】logs").send(`[BOT ExtaziaRP] LOGS -> :checkered_flag: <@${member.user.id}> vient de quitter le serveur discord qu'il meurt en enfer!`)
})

bot.on('message', message => {
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();

    // -> Commande /sayy.

    if (command === 'sayy') {
        let say = args.join(' ');
        message.delete();
        message.channel.send(say);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sayy [<message>] [Succès].");
    }

    // Sondage RP - 21h00.

    if (message.content === prefix + "sondagerp-21h") {
        if(message.author.id == "406124485612142592", "344771703039066113"){
            message.delete();
            var sondagerp21h_embed = new Discord.RichEmbed()
                .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
                .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 21h00 ce soir ? Afin qu'une session se lance un minimum de 12 « ✅ » est requis.", "Répondez ci-dessous grace aux émojis. ")
                .addField(" ✅ : ", " Je serais disponible.")
                .addField(" ❌ : ", "  Je serais indisponible.")
                .addField(" ⌛ : ", " Je serais en retard.")
                .setColor('#05E2F0')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp21h_embed)
            .then(function (message) {
                message.react("⌛")
                message.react("❌")
                message.react("✅") 
                console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sondagerp-21h [Succès].");
            }).catch(function() {
            });
        }else{
            message.delete();
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-21h [Succès].");
        }

    }

    // -> Commande /aide.
    
    if (message.content === prefix + "aide"){
        message.delete();
        var aide_embed = new Discord.RichEmbed()
            .setColor('#05E2F0')
            .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
            .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
            .addField("Les commandes :", "─────────────────────")
            .addField("[BOT ExtaziaRP] - Carte d'identité:", "-> /ci [<Prénom Nom RP>] pour afficher la carte d'identité d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /money [<id discord>] pour afficher le compte bancaire d'un personnage RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /deposit [<montant>] pour mettre de l'argant sur ton compte bancaire RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /withdraw [<montant>] pour récuper de l'argent de ton compte bancaire RP.")
            .addField("[BOT ExtaziaRP] - Économie:", "-> /give-money [<id discord>] [<montant>] pour faire un virement bancaire à un personnage RP.")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(aide_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /aide [Succès].");
    }
    
    // -> Commande /aide musique.
    
    if (message.content === prefix + "aide musique"){
        message.delete();
        var aide_embed = new Discord.RichEmbed()
            .setColor('#05E2F0')
            .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
            .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
            .addField("Les commandes :", "─────────────────────")
            .addField("[BOT ExtaziaRP] - Play:", "-> -play [<lien youtube (musique)>] | Pour lancer une musique.")
            .addField("[BOT ExtaziaRP] - Reset:", "-> -reset | Pour éteindre le bot et couper la musique.")
            .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
            .setTimestamp()
        message.channel.send(aide_embed);
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /aide musique [Succès].");
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Alexis Smith"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Alexis Smith:", {
            file: "https://zupimages.net/up/19/24/76uz.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Alexis Smith [Succès].");
        
    }
});

bot.login(process.env.TOKEN);
