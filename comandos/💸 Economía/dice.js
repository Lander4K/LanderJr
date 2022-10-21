const ecoSchema = require(`${process.cwd()}/modelos/economia.js`);
module.exports = {
    name: "dice", 
    desc: "Sirve para apostar dinero", 
    run: async (client, message, args, prefix) => {
        //Leemos la economia del usuario
        let data = await ecoSchema.findOne({ userID: message.author.id });
        let cantidad = args [0];
        //Comprobaciones previas
        if (["todo", "all-in", "all"].includes(args[0])) {
            cantidad = data.dinero
        } else {
            if (isNaN(cantidad) || cantidad <= 0 || cantidad % 1 != 0) return message.reply("❌ **No has especificado una cantidad válida para apostar!**");
            if (cantidad > data.dinero) return message.reply("❌ **No tienes tanto dinero para apostar!**");
        }
    }
}