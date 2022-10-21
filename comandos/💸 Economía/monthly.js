const ecoSchema = require(`${process.cwd()}/modelos/economia.js`); 
const duration = require('humanize-duration'); 
module.exports = {
    name: "monthly",
    aliases: ["mensual"],
    desc: "Sirve para reclamar tu recompensa mensual",
    run: async (client, message, args, prefix) => {
        //Leemos la economia del usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //Definimos cada cuanto tiempo se puede ejecutar el comando en ms
        let tiempo_ms = 31 * 24 * 60 * 60 * 1000 //2678400000 ms 
        let recompensa_mensual =37200; 
        //Comprobaciones previas
        if(tiempo_ms - (Date.now() - data.monthly) > 0) {
            let tiempo_restante = duration(Date.now() - data.monthly - tiempo_ms,
            {
                language: "es", 
                units: ["d", "h", "m", "s"], 
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a reclamar tu recompensa mensual!**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa_mensual
            },
            monthly: Date.now()
        })
        return message.reply(`✅ **Has reclamado tu recompensa mensual de \`${recompensa_mensual} monedas\`!**`)
    }
}