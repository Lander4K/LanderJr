const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js'); 
const config = require(`${process.cwd()}/config/config.json`); 

module.exports = {
    name: "fnmap", 
    aliases: ["mapfn", "fnmapa", "mapafn", "fortnitemapa", "mapafortnite", "fortnitemap", "mapfortnite"],
    desc: "Sirve para mostrar el mapa actual de Fortnite", 
    run: async (client, message, args, prefix) => {
        let fnmap = new Discord.EmbedBuilder()
            .setColor(client.color)
            .setTitle('Mapa Fortnite') 
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setImage('https://fortnite-api.com/images/map_es.png')
            .setFooter({text: (message.guild.name), iconURL:(message.guild.iconURL({ dynamic: true }))})
            .setTimestamp()
        message.channel.send({ embeds: [fnmap] });
    }
}