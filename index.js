const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("TwinFactions.tk | -help", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)

bot.on("message", (message) => {
if(message.content === "-ip") {
message.channel.send("twinfactions.tk : 19132")
}
});

bot.on("message", (message) => {
if(message.content === "-youtube") {
message.channel.send("YouTube.com/c/ModdingTwinz")
}
});
