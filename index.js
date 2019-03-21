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
                .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setAuthor("ExtaziaRP", "http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
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
                .setThumbnail("http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setAuthor("ExtaziaRP", "http://image.noelshack.com/fichiers/2018/51/5/1545394316-logoo.png")
                .setDescription("Sondage :")
                .addField("Seras-tu disponible à la session RP de 21h00 ?!", "Répondez ci-dessous grace aux émojis.")
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

    if (message.content === prefix + "ci Aly Gatares"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Aly Gatares:", {
            file: "https://zupimages.net/up/19/12/6b3e.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aly Gatares [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Antonio Mantel"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Antonio Mantel:", {
            file: "https://zupimages.net/up/19/10/b6vd.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Antonio Mantel [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Arthur Calmant"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Arthur Calmant:", {
            file: "https://zupimages.net/up/19/10/n6dl.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Arthur Calmant [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Brisse Dennisse"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Brisse Dennisse:", {
            file: "https://zupimages.net/up/19/10/6vil.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Brisse Dennisse [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Bryan Shelby"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Bryan Shelby:", {
            file: "https://zupimages.net/up/19/10/n0tj.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Bryan Shelby [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Evan Guibert"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Evan Guibert:", {
            file: "https://zupimages.net/up/19/10/ea3i.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Evan Guibert [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Garrett Robinson"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Garrett Robinson:", {
            file: "https://zupimages.net/up/19/10/dosv.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Garrett Robinson [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guillaume Popa"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guillaume Popa:", {
            file: "https://zupimages.net/up/19/10/h6lq.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guillaume Popa [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guy Hart"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guy Hart:", {
            file: "https://zupimages.net/up/19/10/avge.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guy Hart [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci James Rodriguez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de James Rodriguez:", {
            file: "https://zupimages.net/up/19/11/q7d3.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci James Rodriguez [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Jason Calmant"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Jason Calmant:", {
            file: "https://zupimages.net/up/19/11/vp6z.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Jason Calmant [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Joachim Sanders"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Joachim Sanders:", {
            file: "https://zupimages.net/up/19/11/p3xt.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Joachim Sanders [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci John Wick"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Wick:", {
            file: "https://zupimages.net/up/19/11/3w3b.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Wick [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Jules Voulot"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Jules Voulot:", {
            file: "https://zupimages.net/up/19/11/f16c.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Jules Voulot [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Kad Illaq"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Kad Illaq:", {
            file: "https://zupimages.net/up/19/12/1yxk.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Kad Illaq [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Malcom Shelby"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Malcom Shelby:", {
            file: "https://zupimages.net/up/19/11/trru.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Malcom Shelby [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Marko Markovic"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Marko Markovic:", {
            file: "https://zupimages.net/up/19/11/s582.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Marko Markovic [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Math Mohrez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Math Mohrez:", {
            file: "https://zupimages.net/up/19/11/6oam.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Math Mohrez [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Michael Shelby"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Michael Shelby:", {
            file: "https://zupimages.net/up/19/11/qdbc.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Michael Shelby [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Pablo Cannor"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Pablo Cannor:", {
            file: "https://zupimages.net/up/19/11/rup2.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Pablo Cannor [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Roulio Ochoa"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Roulio Ochoa:", {
            file: "https://zupimages.net/up/19/11/mdya.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Roulio Ochoa [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Taylor Sweet"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Taylor Sweet:", {
            file: "https://zupimages.net/up/19/12/xbdc.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Taylor Sweet [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Théodore Bagwell"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Théodore Bagwell:", {
            file: "https://zupimages.net/up/19/11/bkid.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Théodore Bagwell [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Thomas Shelby"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Thomas Shelby:", {
            file: "https://zupimages.net/up/19/11/k7kz.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Thomas Shelby [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Walk Booster"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Walk Booster:", {
            file: "https://zupimages.net/up/19/11/h7w6.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Walk Booster [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Alex Calmant"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Alex Calmant:", {
            file: "https://zupimages.net/up/19/12/cnf1.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Alex Calmant [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Tyler Andersone"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Tyler Andersone:", {
            file: "https://zupimages.net/up/19/12/3seu.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Tyler Andersone [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Jean Duprès"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Jean Duprès:", {
            file: "https://zupimages.net/up/19/11/s4fa.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Jean Duprès [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Abraham Rowland"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Abraham Rowland:", {
            file: "https://zupimages.net/up/19/11/65sp.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Abraham Rowland [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Santana Ross"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Santana Ross:", {
            file: "https://zupimages.net/up/19/11/dljt.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Santana Ross [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Ronald Macway"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Ronald Macway:", {
            file: "https://zupimages.net/up/19/11/zjp3.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Ronald Macway [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Cyana Levy"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Cyana Levy:", {
            file: "https://zupimages.net/up/19/11/ay85.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Cyana Levy [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Alex Strinton"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Alex Strinton:", {
            file: "https://zupimages.net/up/19/12/iwuw.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Alex Strinton [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Walter Cold"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Walter Cold:", {
            file: "https://zupimages.net/up/19/12/qore.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Walter Cold [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci José Delavega"){
        message.delete();
        message.channel.send("Voici la ci d'identité de José Delavega:", {
            file: "https://zupimages.net/up/19/12/if5e.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci José Delavega [Succès].");
        
    }
});

bot.login(process.env.TOKEN);
