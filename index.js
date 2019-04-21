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

    if (message.content === prefix + "ci Evan Guibert"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Evan Guibert:", {
            file: "https://zupimages.net/up/19/10/ea3i.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Evan Guibert [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guillaume Popa"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guillaume Popa:", {
            file: "https://zupimages.net/up/19/16/tnmp.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guillaume Popa [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci John Hunter"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Hunter:", {
            file: "https://zupimages.net/up/19/16/kfl0.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Hunter [Succès].");
        
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

    if (message.content === prefix + "ci John Wick"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Wick:", {
            file: "https://zupimages.net/up/19/11/3w3b.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Wick [Succès].");
        
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
            file: "https://zupimages.net/up/19/14/hu5l.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Roulio Ochoa [Succès].");
        
    }

    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Théodore Bagwell"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Théodore Bagwell:", {
            file: "https://zupimages.net/up/19/16/xnp4.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Théodore Bagwell [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Aleksander Jerzmanowski"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Aleksander Jerzmanowski:", {
            file: "https://zupimages.net/up/19/12/hi61.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aleksander Jerzmanowski [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Arès Hoffmann"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Arès Hoffmann:", {
            file: "https://zupimages.net/up/19/16/b0dm.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Arès Hoffmann [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Booby McPinch"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Booby McPinch:", {
            file: "https://zupimages.net/up/19/16/6dvl.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Booby McPinch [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Max Romano"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Max Romano:", {
            file: "https://zupimages.net/up/19/14/2kb6.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Max Romano [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Franklin White"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Franklin White:", {
            file: "https://zupimages.net/up/19/16/63gh.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Franklin White [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guerreiro Quintana"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guerreiro Quintana:", {
            file: "https://zupimages.net/up/19/15/74w4.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guerreiro Quintana [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Micke Donkey"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Micke Donkey:", {
            file: "https://zupimages.net/up/19/15/9swy.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Micke Donkey [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Cédric Ocher"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Cédric Ocher:", {
            file: "https://zupimages.net/up/19/16/oaru.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Cédric Ocher [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Corentin Pou"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Corentin Pou:", {
            file: "https://zupimages.net/up/19/16/wkiw.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Corentin Pou [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mathys Torique"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mathys Torique:", {
            file: "https://zupimages.net/up/19/16/e9oc.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mathys Torique [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Dimitri Raskalov"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Dimitri Raskalov:", {
            file: "https://zupimages.net/up/19/16/4747.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Dimitri Raskalov [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Killian Pachocki"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Killian Pachocki:", {
            file: "https://zupimages.net/up/19/16/xnp4.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Killian Pachocki [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Elias Tores"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Elias Tores:", {
            file: "https://zupimages.net/up/19/16/mmcm.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Elias Tores [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Florian Blé"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Florian Blé:", {
            file: "https://zupimages.net/up/19/16/gtbm.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Florian Blé [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Vick Marshall"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Vick Marshall:", {
            file: "https://zupimages.net/up/19/16/ctaw.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Vick Marshall [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mauricio White"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mauricio White:", {
            file: "https://zupimages.net/up/19/16/ywwl.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mauricio White [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Kyoto Clover"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Kyoto Clover:", {
            file: "https://zupimages.net/up/19/16/tdsj.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Kyoto Clover [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Arthuro Da Silva"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Arthuro Da Silva:", {
            file: "https://zupimages.net/up/19/16/ev67.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Arthuro Da Silva [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Kinsley Bvendo"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Kinsley Bvendo:", {
            file: "https://zupimages.net/up/19/16/sl23.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Kinsley Bvendo [Succès].");
        
    }
    
     // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Matt Scofield"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Matt Scofield:", {
            file: "https://zupimages.net/up/19/16/xmom.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Matt Scofield [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Nourredine Bahri"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Nourredine Bahri:", {
            file: "https://zupimages.net/up/19/16/218r.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Nourredine Bahri [Succès].");
        
    }
    
     // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Nathalia Gonzalez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Nathalia Gonzalez:", {
            file: "https://zupimages.net/up/19/16/m2rq.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Nathalia Gonzalez [Succès].");
        
    }
    
});

bot.login(process.env.TOKEN);
