module.exports = {
    name: "resume",
    aliases: ["resumir"],
    desc: "Sirve para resumir música parada con el comando ?pause",
    run: async (client, message, args, prefix) => {
        //comprobaciones previas
        if(!message.member.voice?.channel) return message.reply(`❌ **Tienes que estar en un canal de voz para ejecutar este comando!**`)
        client.distube.resume(message);
    }
}