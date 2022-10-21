const Discord = module.require("discord.js");

module.exports = {
  name: "esay",
  description: "Mandar mensajes en forma de embed",
  botPerms: ["EmbedLinks", "ManageMessages"],
  run: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Porfavor, envía el texto para que lo convierta en embed");
    }
    const embed = new Discord.EmbedBuilder()
      .setDescription(`${msg}`)
      .setColor(0xFAFFFB);

    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};