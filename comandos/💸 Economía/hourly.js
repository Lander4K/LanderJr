const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
const duration = require('humanize-duration');
module.exports = {
    name: "hourly", 
    aliases: [],
    desc: "Sirve para reclamar tu recompensa cada hora", 
    run: async (client, message, args, prefix) => {
        //Leemos la economia del usuario
        let data = await ecoSchema.findOne({userID: message.author.id});
        //Definimos cada cuando tiempo se puede ejecutar el comando en ms
        let tiempo_ms = 60 * 60 * 1000 // 36000000 ms 
        let recompensa_horaria = 50; 
        //Comprobaciones previas
        if(tiempo_ms - (Date.now() - data.hourly) > 0) {
            let tiempo_restante = duration(Date.now() - data.hourly - tiempo_ms,
            {
                language: "es",
                units: ["h", "m", "s"],
                round: true,
            })
            return message.reply(`🕑 **Tienes que esperar \`${tiempo_restante}\` para volver a reclamar tu recompensa de cada hora!**`)
        }
        await ecoSchema.findOneAndUpdate({userID: message.author.id}, {
            $inc: {
                dinero: recompensa_horaria
            },
            hourly: Date.now()
        })
        return message.reply(`✅ **Has reclamado tu recompensa de cada hora de \`${recompensa_horaria} monedas\`!**`)
    }
}