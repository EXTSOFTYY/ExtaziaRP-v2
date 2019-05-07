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

    // Sondage RP - 15h00.

    if (message.content === prefix + "sondagerp-15h") {
        if(message.author.id == "406124485612142592"){
            message.delete();
            var sondagerp15h_embed = new Discord.RichEmbed()
                .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
                .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 15h00 ?!", "Répondez ci-dessous grace aux émojis.")
                .addField(" ✅ : ", " Je serais disponible.")
                .addField(" ❎ : ", "  Je serais indisponible.")
                .addField(" ⌛ : ", " Je serais en retard.")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp15h_embed)
            .then(function (message) {
                message.react("⌛")
                message.react("❎")
                message.react("✅") 
                console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /sondagerp-15h [Succès].");
            }).catch(function() {
            });
        }else{
            message.delete();
            console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur n'ayant pas la permission demande la commande -> /sondagerp-15h [Succès].");
        }

    }

    // Sondage RP - 21h00.

    if (message.content === prefix + "sondagerp-21h") {
        if(message.author.id == "406124485612142592"){
            message.delete();
            var sondagerp21h_embed = new Discord.RichEmbed()
                .setThumbnail("https://zupimages.net/up/19/19/1ve9.jpg")
                .setAuthor("ExtaziaRP", "https://zupimages.net/up/19/19/1ve9.jpg")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 21h00 le 10/05/19 ?", "Répondez ci-dessous grace aux émojis. ")
                .addField(" ✅ : ", " Je serais disponible.")
                .addField(" ❎ : ", "  Je serais indisponible.")
                .addField(" ⌛ : ", " Je serais en retard.")
                .setColor('#CC2EFA')
                .setFooter("© ExtaziaRP; Développement par SOFTYY - 2018/2019.")
                .setTimestamp()
            message.channel.send(sondagerp21h_embed)
            .then(function (message) {
                message.react("⌛")
                message.react("❎")
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
            .setColor('#CC2EFA')
            .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
            .setAuthor("ExtaziaRP", "http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
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
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Aliochka Pietravesky"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Aliochka Pietravesky:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aliochka Pietravesky [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Antonio Mantel"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Antonio Mantel:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Antonio Mantel [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Bianca Santini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Bianca Santini:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Bianca Santini [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Cédric Ocher"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Cédric Ocher:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Cédric Ocher [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Clay Jensen"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Clay Jensen:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Clay Jensen [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Daril Dixon"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Daril Dixon:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Daril Dixon [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Derek Richards"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Derek Richards:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Derek Richards [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Ethan Arron Marshall"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Ethan Arron Marshall:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Ethan Arron Marshall [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Fiona Santini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Fiona Santini:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Fiona Santini [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Franklin White"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Franklin White:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Franklin White [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guillaume Popa"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guillaume Popa:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guillaume Popa [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guy Hart"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guy Hart:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guy Hart [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Jack Zaza"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Jack Zaza:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Jack Zaza [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci James Leblond"){
        message.delete();
        message.channel.send("Voici la ci d'identité de James Leblond:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci James Leblond [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Killian Pachocki"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Killian Pachocki:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Killian Pachocki [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Leo Piazzi"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Leo Piazzi:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Leo Piazzi [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Logan Chevallier"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Logan Chevallier:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Logan Chevallier [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Marco Marchisio"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Marco Marchisio:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Marco Marchisio [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mario Giavarini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mario Giavarini:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mario Giavarini [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Max Romano"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Max Romano:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Max Romano [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mehdi Stallon"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mehdi Stallon:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mehdi Stallon [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Michael Scofield"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Michael Scofield:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Michael Scofield [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Pablo Cannor"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Pablo Cannor:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Pablo Cannor [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Saalva Sopoz"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Saalva Sopoz:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Saalva Sopoz [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Steven Lab"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Steven Lab:", {
            file: " "
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Steven Lab [Succès].");
        
    }
    
});

bot.login(process.env.TOKEN);
