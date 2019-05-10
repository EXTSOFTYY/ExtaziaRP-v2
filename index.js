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
                .setColor('#05E2F0')
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
                .setColor('#05E2F0')
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
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Aliochka Pietravesky"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Aliochka Pietravesky:", {
            file: "https://zupimages.net/up/19/19/op4s.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aliochka Pietravesky [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Antonio Mantel"){
        message.delete();
        message.channel.send("Voici la ci d'identité d' Antonio Mantel:", {
            file: "https://zupimages.net/up/19/17/pa61.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Antonio Mantel [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Bianca Santini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Bianca Santini:", {
            file: "https://zupimages.net/up/19/19/re4k.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Bianca Santini [Succès].");
        
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

    if (message.content === prefix + "ci Clay Jensen"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Clay Jensen:", {
            file: "https://zupimages.net/up/19/19/2prj.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Clay Jensen [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Daril Dixon"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Daril Dixon:", {
            file: "https://zupimages.net/up/19/19/9o8v.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Daril Dixon [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Derek Richards"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Derek Richards:", {
            file: "https://zupimages.net/up/19/19/1mwr.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Derek Richards [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Ethan Arron Marshall"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Ethan Arron Marshall:", {
            file: "https://zupimages.net/up/19/19/odgc.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Ethan Arron Marshall [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Fiona Santini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Fiona Santini:", {
            file: "https://zupimages.net/up/19/19/g6r6.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Fiona Santini [Succès].");
        
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

    if (message.content === prefix + "ci Guillaume Popa"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guillaume Popa:", {
            file: "https://zupimages.net/up/19/16/tnmp.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guillaume Popa [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Guy Hart"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Guy Hart:", {
            file: "https://zupimages.net/up/19/19/05l6.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guy Hart [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Killian Pachocki"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Killian Pachocki:", {
            file: "https://zupimages.net/up/19/17/4f79.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Killian Pachocki [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Leo Piazzi"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Leo Piazzi:", {
            file: "https://zupimages.net/up/19/19/dsum.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Leo Piazzi [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Logan Chevallier"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Logan Chevallier:", {
            file: "https://zupimages.net/up/19/19/qx3q.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Logan Chevallier [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Marco Marchisio"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Marco Marchisio:", {
            file: "https://zupimages.net/up/19/19/i38y.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Marco Marchisio [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mario Giavarini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mario Giavarini:", {
            file: "https://zupimages.net/up/19/19/fjec.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mario Giavarini [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Max Romano"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Max Romano:", {
            file: "https://zupimages.net/up/19/19/fye7.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Max Romano [Succès].");
        
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

    if (message.content === prefix + "ci Steven Lab"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Steven Lab:", {
            file: "https://zupimages.net/up/19/19/66v0.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Steven Lab [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Sergio Simeone"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Sergio Simeone:", {
            file: "https://zupimages.net/up/19/19/zlz0.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Sergio Simeone [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Santiago Salvador"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Santiago Salvador:", {
            file: "https://zupimages.net/up/19/19/nwnx.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Santiago Salvador [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Rodrigo Chevchenko"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Rodrigo Chevchenko:", {
            file: "https://zupimages.net/up/19/19/3k0d.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Rodrigo Chevchenko [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mathys Torique"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mathys Torique:", {
            file: "https://zupimages.net/up/19/19/2pua.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mathys Torique [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Zlatan Brankovic"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Zlatan Brankovic:", {
            file: "https://zupimages.net/up/19/19/bbd8.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Zlatan Brankovic [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Carlos Hernandez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Carlos Hernandez:", {
            file: "https://zupimages.net/up/19/19/qex3.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Carlos Hernandez [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Francesco Redwood"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Francesco Redwood:", {
            file: "https://zupimages.net/up/19/19/gs0m.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Francesco Redwood [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Osiris Fernandes"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Osiris Fernandes:", {
            file: "https://zupimages.net/up/19/19/bjqq.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Osiris Fernandes [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Escobard Lopez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Escobard Lopez:", {
            file: "https://zupimages.net/up/19/19/qj0s.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Escobard Lopez [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Fabio Silva"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Fabio Silva:", {
            file: "https://zupimages.net/up/19/19/as2f.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Fabio Silva [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Juan De Kasos"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Juan De Kasos:", {
            file: "https://zupimages.net/up/19/19/bbor.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Juan De Kasos [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Lucas Rodriguez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Lucas Rodriguez:", {
            file: "https://zupimages.net/up/19/19/a9x0.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Lucas Rodriguez [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Santago Salvador"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Santago Salvador:", {
            file: "https://zupimages.net/up/19/19/vv98.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Santago Salvador [Succès].");
        
    }
    
});

bot.login(process.env.TOKEN);
