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
                .addField("Seras-tu disponible à la session RP de 15h00 le 16/06/19 ?!", "Répondez ci-dessous grace aux émojis.")
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
                .addField("Seras-tu disponible à la session RP de 21h00 le 26/06/19 ? Afin qu'une session se lance un minimum de 12 « ✅ » est requis.", "Répondez ci-dessous grace aux émojis. ")
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
            file: "https://zupimages.net/up/19/20/m81x.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Cédric Ocher [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Clay Jensen"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Clay Jensen:", {
            file: "https://zupimages.net/up/19/25/6e1n.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Clay Jensen [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Derek Richards"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Derek Richards:", {
            file: "https://zupimages.net/up/19/20/5f36.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Derek Richards [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Fiona Santini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Fiona Santini:", {
            file: "https://zupimages.net/up/19/20/edfr.jpg"
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
            file: "https://zupimages.net/up/19/23/dlp7.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Guy Hart [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Tom Wills"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Tom Wills:", {
            file: "https://zupimages.net/up/19/23/48et.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Tom Wills [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mario Giavarini"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mario Giavarini:", {
            file: "https://zupimages.net/up/19/20/4ada.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mario Giavarini [Succès].");
        
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
            file: "https://zupimages.net/up/19/19/mxbq.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Steven Lab [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mathys Torique"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mathys Torique:", {
            file: "https://zupimages.net/up/19/20/ixzb.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mathys Torique [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Zlatan Brankovic"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Zlatan Brankovic:", {
            file: "https://zupimages.net/up/19/22/kjj5.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Zlatan Brankovic [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Francesco Redwood"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Francesco Redwood:", {
            file: "https://zupimages.net/up/19/22/q78j.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Francesco Redwood [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Osiris Fernandes"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Osiris Fernandes:", {
            file: "https://zupimages.net/up/19/19/hyge.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Osiris Fernandes [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Lucas Rodriguez"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Lucas Rodriguez:", {
            file: "https://zupimages.net/up/19/19/egjd.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Lucas Rodriguez [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Sergio Simeone"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Sergio Simeone:", {
            file: "https://zupimages.net/up/19/24/6afd.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Sergio Simeone [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Zyphir Zeus"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Zyphir Zeus:", {
            file: "https://zupimages.net/up/19/23/dlp7.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Zyphir Zeus [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Aaron Black"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Aaron Black:", {
            file: "https://zupimages.net/up/19/21/wv5f.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aaron Black [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Timéo Decker"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Timéo Decker:", {
            file: "https://zupimages.net/up/19/22/yil5.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Timéo Decker [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Abdel Fernandes"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Abdel Fernandes:", {
            file: "https://zupimages.net/up/19/20/howv.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Abdel Fernandes [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Ivan Popkov"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Ivan Popkov:", {
            file: "https://zupimages.net/up/19/21/h9nf.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Ivan Popkov [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Raoule Hamza"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Raoule Hamza:", {
            file: "https://zupimages.net/up/19/22/icjv.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Raoule Hamza [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Azise Belhamme"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Azise Belhamme:", {
            file: "https://zupimages.net/up/19/21/0ki7.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Azise Belhamme [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Doumé Santi"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Doumé Santi:", {
            file: "https://zupimages.net/up/19/22/kkjw.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Doumé Santi [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Aly Gatares"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Aly Gatares:", {
            file: "https://zupimages.net/up/19/22/2hcf.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Aly Gatares [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Antonio Valanca"){
        message.delete();
        message.channel.send("Voici la ci d'identité d'Antonio Valanca:", {
            file: "https://zupimages.net/up/19/24/e3sf.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Antonio Valanca [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Reagan Johnson"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Reagan Johnson:", {
            file: "https://zupimages.net/up/19/23/tsb2.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Reagan Johnson [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Laura Santi"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Laura Santi:", {
            file: "https://zupimages.net/up/19/23/ssid.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Laura Santi [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Lucas Black"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Lucas Black:", {
            file: "https://zupimages.net/up/19/25/a32q.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Lucas Black [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Eduardo Gonzales"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Eduardo Gonzales:", {
            file: "https://zupimages.net/up/19/24/gu1o.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Eduardo Gonzales [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Olivier Parker"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Olivier Parker:", {
            file: "https://zupimages.net/up/19/23/75wp.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Olivier Parker [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Charline Trevor"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Charline Trevor:", {
            file: "https://zupimages.net/up/19/24/q0f4.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Charline Trevor [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci John Scott"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Scott:", {
            file: "https://zupimages.net/up/19/24/qdyw.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Scott [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Alexis Gonzales"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Alexis Gonzales:", {
            file: "https://zupimages.net/up/19/24/z43g.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Alexis Gonzales [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Léo Marka"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Léo Marka:", {
            file: "https://zupimages.net/up/19/24/14va.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Léo Marka [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Mike Parker"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Mike Parker:", {
            file: "https://zupimages.net/up/19/25/87qf.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Mike Parker [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Tony Wayne"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Tony Wayne:", {
            file: "https://zupimages.net/up/19/25/bz2d.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Tony Wayne [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci John Aaron"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Aaron:", {
            file: "https://zupimages.net/up/19/25/wqwe.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Aaron [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Ben Raffalli"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Ben Raffalli:", {
            file: "https://zupimages.net/up/19/25/0f8h.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Ben Raffalli [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Brian Taylor"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Brian Taylor:", {
            file: "https://zupimages.net/up/19/26/4yml.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Brian Taylor [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci John Richart"){
        message.delete();
        message.channel.send("Voici la ci d'identité de John Richart:", {
            file: "https://zupimages.net/up/19/25/k1ii.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci John Richart [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Jessica Marka"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Jessica Marka:", {
            file: "https://zupimages.net/up/19/26/fv1d.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Jessica Marka [Succès].");
        
    }
    
    // -> ci d'identité - UPDATE 2.0

    if (message.content === prefix + "ci Léon Rosinalero"){
        message.delete();
        message.channel.send("Voici la ci d'identité de Léon Rosinalero:", {
            file: "https://zupimages.net/up/19/26/sdyv.jpg"
        });
        console.log("[BOT ExtaziaRP] LOGS -> Un utilisateur demande la commande -> /ci Léon Rosinalero [Succès].");
        
    }
});

bot.login(process.env.TOKEN);
