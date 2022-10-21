const { EmbedBuilder } = require('discord.js'); 
const Discord = require('discord.js');
const config = require(`${process.cwd()}/config/config.json`);

module.exports = {
    name: "lander4k", 
    aliases: ["4k", "desarrollador", "creador"],
    desc: "Sirve para mostrar un mensaje sobre mi!",
    run: async (client, message, args, prefix) => {
        let lander4k = new Discord.EmbedBuilder()
            .setColor(config.color)
            .setTitle(`</Lander>#5830 - Desarrollador de Bots`)
            .setURL('https://discord.gg/nPQrM3NaeE')
            .addFields(
                { name: '\u200B', value: 'Hola! Mi nombre es **Lander** \`</Lander>#5830\` y soy un desarrollador de bots!' },
                { name: '\u200B', value: 'Todavía estoy empezando en esto de la programación, asi que por favor, si encuentras algún fallo en alguno de mi bots, me gustaría que me contactases al MD'},
                { name: '\u200B', value: 'De hecho, **he creado este bot** y tú puedes conseguir uno propio para tí **GRATIS** \`uniendote a mi servidor!\`' },
                { name: '\u200B', value: 'Si tienes preguntas o necesitas ayuda, mis MDS están abiertos!'}
            )
            .setThumbnail('https://i.pinimg.com/564x/f3/e1/d2/f3e1d27e04f8daf4b996ac4e4f7de4b3.jpg')
            .setFooter({ text: `© desarrollado por <Lander/>#5830 | 2022`, iconURL: 'https://i.imgur.com/sBLrM6E.png'})
        message.channel.send({ embeds: [lander4k] });
    }
}