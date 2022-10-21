const {asegurar_todo} = require(`${process.cwd()}/utils/funciones.js`);
const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const Discord = require('discord.js');
module.exports = {
    name: "profile",
    aliases: ["perfil"],
    desc: "Sirve para ver la cartera de un Usuario",
    run: async (client, message, args, prefix) => {
        const user = message.guild.members.cache.get(args[0]) || message.mentions.members.filter(m => m.guild.id == message.guild.id).first() || message.member;
        if(user.bot) return message.reply("❌ **Los bots no puede tener dinero!**");
        await asegurar_todo(null, user.id);
        let data = await ecoSchema.findOne({userID: user.id});
        message.reply({
            embeds: [new Discord.EmbedBuilder()
            .setTitle(`👛 **Dinero:** \`${data.dinero} 💸\``)
            .setDescription(`🏦 **Banco:** \`${data.banco} 💸\``)
            .setColor(client.color)
            .setFooter({text: `${user.user.tag}`, iconURL: user.displayAvatarURL({dynamic: true})})
            ]
        });
    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por <Lander/>#5830 || - ||  ║
║    ----------| discord.gg/DYqbaVNSQD |----------    ║
╚═════════════════════════════════════════════════════╝
*/
