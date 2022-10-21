const { ActivityType } = require('discord.js')

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.Playing,
                text: "By: <Lander/>#5830",
                status: "online"
            },
            {
                type: ActivityType.Watching,
                text: `${client.guilds.cache.size} servidores`,
                status: "online"
            },
            {
                type: ActivityType.Playing,
                text: `?help | dsc.gg/lander4k`,
                status: "online"
            }
        ];    
        const option = Math.floor(Math.random() * options.length);
        
        client.user 
          .setPresence({
            activities: [
                {
                    name: options[option].text,
                    type: options[option].type,
                },
            ],
            status: options[option].status,
          });
    };
};