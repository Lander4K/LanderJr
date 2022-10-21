const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton, MessageAttachment } = require('discord.js')

module.exports = {
    name: "bingo", 
    aliases: ["tarjeton"],
    desc: "Sirve para jugar al bingo",
    run: async (client, message, args, prefix) => {
        
        const Canvas = require('canvas') 
        const canvas = Canvas.createCanvas(400, 400)
        const ctx = canvas.getContext("2d")

        const background = await Canvas.loadImage("https://media.discordapp.net/attachments/1005210138048733204/1014982812870398054/unknown.png")
        ctx.drawImage(background, 0, 0, 400, 400) //Dibujamos la imagen

        b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].sort((a, b) => 0.5 - Math.random()),

        i = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].sort((a, b) => 0.5 - Math.random())
        
        n = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].sort((a, b) => 0.5 - Math.random())

        g = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60].sort((a, b) => 0.5 - Math.random())

        o = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75].sort((a, b) => 0.5 - Math.random())

        

        ctx.fillStyle = "#000"
        ctx.font = "50px Arial"
        ctx.textAlign = "center"


        ctx.fillText(`${b[0]}`, 70, 125)
        ctx.fillText(`${b[1]}`, 70, 185)
        ctx.fillText(`${b[2]}`, 70, 250)
        ctx.fillText(`${b[3]}`, 70, 320)
        ctx.fillText(`${b[4]}`, 70, 380)

        ctx.fillText(`${i[0]}`, 135, 125)
        ctx.fillText(`${i[1]}`, 135, 185)
        ctx.fillText(`${i[2]}`, 135, 250)
        ctx.fillText(`${i[3]}`, 135, 320)
        ctx.fillText(`${i[4]}`, 135, 380)

        ctx.fillText(`${n[0]}`, 200, 125)
        ctx.fillText(`${n[1]}`, 200, 185)
        ctx.fillText(`${n}[3]`, 200, 380)
        ctx.fillText(`${n}[2]`, 200, 320)

        ctx.fillText(`${g[0]}`, 265, 125)
        ctx.fillText(`${g[1]}`, 265, 185)
        ctx.fillText(`${g[2]}`, 265, 250)
        ctx.fillText(`${g[3]}`, 265, 320)
        ctx.fillText(`${g[4]}`, 265, 380)

        ctx.fillText(`${o[0]}`, 330, 125)
        ctx.fillText(`${o[1]}`, 330, 285)
        ctx.fillText(`${o[2]}`, 330, 250)
        ctx.fillText(`${o[3]}`, 330, 320)
        ctx.fillText(`${o[4]}`, 330, 380)



        const attachment = new MessageAttachment(canvas.toBuffer(), "tarjeton.png")
        message.author.send("**💳 Con esta tarjeta podrás participar en el bingo!**")

        message.author.send({ files: [attachement] })

        message.author.send(`✅ **${message.author.tag}, Tu tarjeta se ha enviado a correctamente a tus mensajes directos.**`)



    }
}