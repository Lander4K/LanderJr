const ecoSchema = require(`${process.cwd()}/modelos/economia.js`); 
const duration = require('humanize-duration');
module.exports = {
    name: "beg", 
    aliases: ["limosna", "pedir"], 
    desc: "Sirve para ganar un poco de dinero", 
    run: async (client, message, args, prefix) => {
        //Leemos la economía del usuario
        let data = await ecoSchema.findOne({userID: message.author.id}); 
        //Definimos cada cuanto tiempo se puede ejecutar el comando en ms
        let tiempo_ms = 3 * 60 * 1000
        let limosna = 30; 
        //Comprobaciones previas
        if(tiempo_ms - (Date.now() - data.beg) > 0) {
            let tiempo_restante = duration(Date.now() - data.beg - tiempo_ms,
            {
                language: "es", 
                units: ["m", "s"],
                round: true, 
            })
            return message.reply(`🕑 **Tienes que esperar ${tiempo_restante} para reclamar tu limonsa!**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: limosna
            },
            limosna: Date.now()
        })
        return message.reply(`✅ **Has pedido una limosna y has ganado \`${limosna} monedas\`!**`)
    }
}