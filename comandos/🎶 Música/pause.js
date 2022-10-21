module.exports = {
    name: "pause", 
    aliases: ["parar", "pausa", "pausar"],
    desc: "Sirve para pausar la música actual temporalmente",
    run: async (client, message, args, prefix) => {
        //comprobaciones previas
        const config = require(`${process.cwd()}/config/config.json`)
        if(!message.member.voice?.channel) return message.reply(`❌ **Tienes que estar en un canal de voz para ejecutar este comando!**`);
        client.distube.pause(message);  
        message.reply(`⏸️ **Has detenido el reproductor, usa \`${config.prefix}resume\` para resumirlo!**`)
    }
}   