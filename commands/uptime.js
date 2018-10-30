const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  if 
    (message.content.indexOf(process.env.PREFIX) !== 0) return;
  if
    (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```Sorry, You Do Not Have Sufficient Permission To This Command.```");

let totalSeconds = (bot.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `*${hours} hours, ${minutes} minutes and ${seconds} seconds*`;
  
  let uptimee = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("★ System Uptime Command")
  .addField(`󠂪 󠂪`, `**Uptime**: ${uptime}\n󠂪 󠂪`, true)
  .setFooter(`Requested By ${message.author.username}`, `${message.author.avatarURL}`)
  .setTimestamp()
  
  message.channel.send(uptimee)
}

module.exports.help = {
  name: "uptime"
}
