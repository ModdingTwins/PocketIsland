const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("ready", () => {
console.log(`${bot.user.username}` + "is online")

bot.user.setActivity("TwinFactions.tk | ~help", {type: "STREAMING"})
});
bot.login(process.env.TOKEN)

bot.on("message", (message) => {
if(message.content === "~ip") {
message.channel.send("twinfactions.tk : 19132")
}
});

bot.on("message", (message) => {
if(message.content === "~youtube") {
message.channel.send("YouTube.com/c/ModdingTwinz")
 }
 });
 
bot.on("message", (message) => {
if(message.content === "~discord") {
message.channel.send("https://discord.gg/u3vqvst")
}
});
 
bot.on("message", (message) => {
if(message.content === "~help") {
console.log("Log")
message.channel.send(`${message.author.username}` + ", I Have Sent You The Commands 📪")
message.author.send("Please specify a module that you would like to look up:\n 1. ~ip ``TwinFactions Server Ip & Port``\n 2. ~youtube ``Subscribe To ModdingTwinz Channel``\n 3. ~discord ``Join us on TwinFactions & Have Fun!``\n\n Powered By ``ModdingTwinz#4560``")
}
});
