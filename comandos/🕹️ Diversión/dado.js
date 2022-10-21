const Discord = require('discord.js');

module.exports = {
    name: "dado",
    aliases: ["dados"],
    desc: "Tira un dado",
    run: async(client, message, args, prefix) => {
        const dados = ['1', '2', '3', '4', '5', '6']
        const dado = Math.floor(Math.random() * dados.length)
        
        message.reply(`**🎲 Tu número es: ${dado}**`)
    }
}